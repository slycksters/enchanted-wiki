import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { IoMdSearch } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import { SearchModal } from '@components';
import { PAGE_LINKS } from '@constants';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Best Practice: Prevent body scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.bodyNoScroll);
    } else {
      document.body.classList.remove(styles.bodyNoScroll);
    }
    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove(styles.bodyNoScroll);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* The main navigation bar that is always visible */}
      <div className={styles.navbarContainer}>
        {/* Hamburger Icon - Only visible on mobile */}
        <button
          aria-label={'Open navigation menu'}
          className={styles.hamburgerButton}
          onClick={() => setIsMenuOpen(true)}
          type={'button'}
        >
          <FaBars size={24} />
        </button>

        {/* Centered Desktop Links - Hidden on mobile */}
        <div className={styles.desktopLinkList}>
          {PAGE_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                className={styles.linkListItem}
                to={link.path}
                key={link.path}
              >
                <Icon className={styles.linkListItemIcon} />
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div>

        {/* Search Icon - Always visible on the right */}
        <div className={styles.search}>
          <button
            aria-label={'Search'}
            onClick={() => setIsModalOpen(!isModalOpen)}
            type={'button'}
          >
            <IoMdSearch size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Slides in when open */}
      <div
        className={clsx(styles.mobileMenu, { [styles.menuOpen]: isMenuOpen })}
      >
        <button
          aria-label={'Close navigation menu'}
          className={styles.closeButton}
          onClick={closeMenu}
          type={'button'}
        >
          <FaTimes size={30} />
        </button>
        <nav className={styles.mobileNavLinks}>
          {PAGE_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                className={styles.mobileLinkItem}
                key={`mobile-${link.path}`}
                onClick={closeMenu}
                to={link.path}
              >
                <Icon className={styles.linkListItemIcon} />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {isModalOpen && <SearchModal onHide={() => setIsModalOpen(false)} show={isModalOpen} />}
    </>
  );
};
