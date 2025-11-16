import { Image } from '@components';
import { Inhabitants, Level, Location, Rarity, Stats, Type } from './components';
import styles from './Header.module.css';

export const Header = ({ info }) => {
  return (
    <div className={styles.header}>
      <section className={styles.imageWrapper}>
        <Image alt={info.name} src={info.attachment} />
      </section>
      <section>
        <h1>
          <i>
            {info.name}
            {info.isVaulted && <small>(Vaulted)</small>}
          </i>
        </h1>
        {/* </p> */}
        <div className={styles.infoWrapper}>
          <Rarity info={info} />
          <Type info={info} />
          <Level info={info} />
          <Inhabitants inhabitants={info.inhabitants} />
          <Location locations={info.locations} />
          <Stats info={info} />
        </div>
      </section>
    </div>
  );
};
