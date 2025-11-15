import { Card } from '@components';
import styles from './Inhabitants.module.css';

export const Inhabitants = ({ info }) => {
  if (!info.inhabitants?.length) return null;

  return (
    <section className={styles.inhabitants}>
      <h3>
        <i>{info.inhabitants.length > 1 ? 'Inhabitants' : 'Inhabitant'}</i>
      </h3>
      <div className={'d-flex flex-wrap gap-2'}>
        {info.inhabitants.filter(o => !o.isVaulted).map((inhabitant) => {
          return (
            <Card
              data={inhabitant}
              key={`inhabitant-item-${inhabitant.id}-${inhabitant.name}`}
            />
          );
        })}
      </div>
    </section>
  );
};
