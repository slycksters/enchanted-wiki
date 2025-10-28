import styles from './Home.module.css';
import { enchantedLogo, zazelAvatarImg } from '../../assets';
import { PAGE_LINKS } from '../../constants';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      {/* <NavigationCardsComponent /> */}
      <div className={styles.linkList}>
        {PAGE_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <Link to={link.path}>
              <div className={styles.linkListItem}>
                <Icon size={30} />
                <p>
                  {link.name}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Logo */}
      <section className={styles.imageWrapper}>
        <img src={enchantedLogo} alt={'enchanted-logo'} />
      </section>

      {/* Developer Name */}
      <section className={styles.developerName}>
        <small>Enchanted Wiki Developed by: Slyckster AKA Zazel</small>
      </section>

      {/* Avatar Display */}
      <section className={styles.avatarDisplay}>
        <img alt={'roblox-avatar'} src={zazelAvatarImg} />
        <div className={styles.avatarShadow}></div>
      </section>
    </div>
  );
};
