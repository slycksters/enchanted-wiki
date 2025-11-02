import { Image } from '@components';
import { Level, Rarity, Stats, Type } from './components';
import styles from './Header.module.css';

export const Header = ({ info }) => {
  return (
    <div className={styles.header}>
      <section>
        <p className={styles.title}>{info.name}</p>
        <div className={styles.infoWrapper}>
          <Rarity info={info} />
          <Type info={info} />
          <Level info={info} />
          <Stats info={info} />
        </div>
      </section>
      <section className={styles.imageWrapper}>
        <Image alt={info.name} src={info.attachment} />
      </section>
    </div>
  );
};
