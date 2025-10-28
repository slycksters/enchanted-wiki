import { Link } from 'react-router-dom';
import styles from './NavLink.module.css';
import { PAGE_LINKS } from '../../../../constants';

export const NavLinkComponent = () => {
  return (
    <div className={styles.linkList}>
      {PAGE_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Link to={link.path} key={link.path}>
            <div className={styles.linkListItem}>
              <Icon className={styles.linkListItemIcon} />
              <p>{link.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  )
};