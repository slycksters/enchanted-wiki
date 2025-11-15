import { Card } from '@components';
import styles from './Drops.module.css';

export const Drops = ({ info }) => {
  if (!info.drops?.length) return null;

  return (
    <section className={styles.drops}>
      <h3>
        <i>Drops</i>
      </h3>
      <div className={'d-flex flex-wrap gap-2'}>
        {info.drops.map((drop) => {
          return (
            <Card
              data={drop}
              key={`drop-item-${drop.id}-${drop.name}`}
            />
          );
        })}
      </div>
    </section>
  );
};
