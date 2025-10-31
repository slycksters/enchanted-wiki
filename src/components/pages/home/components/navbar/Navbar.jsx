import { Link } from 'react-router-dom';
import { PAGE_LINKS } from '@constants';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.linkList}>
      {PAGE_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Link className={styles.linkListItem} to={link.path} key={link.path}>
            <Icon className={styles.linkListItemIcon} />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  )
};