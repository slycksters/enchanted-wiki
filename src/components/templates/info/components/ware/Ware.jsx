import { Card } from '@components';
import styles from './Ware.module.css';

export const Ware = ({ info }) => {
  if (!info.ware?.length) return null;

  return (
    <section className={styles.ware}>
      <h3><i>Ware</i></h3>
      <div className={'d-flex flex-wrap gap-2'}>
        {info.ware.map((w) => {
          return (
            <Card
              data={w}
              key={`ware-item-${w.id}-${w.name}`}
              style={{ height: '100%'}}
            />
          );
        })}
      </div>
    </section>
  );
};
