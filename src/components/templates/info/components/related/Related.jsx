import { Card } from '@components';
import styles from './Related.module.css';

export const Related = ({ info }) => {
  if (!info.related) return null;

  return (
    <section className={styles.related}>
      <h3>
        <i>Related</i>
      </h3>
      <div className={'d-flex flex-wrap gap-2'}>
        {info.related.map((item) => {
          return <Card data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};
