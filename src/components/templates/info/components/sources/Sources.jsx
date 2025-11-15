import { Card } from '@components';
import styles from './Sources.module.css';

export const Sources = ({ info }) => {
  if (!info.sources?.length) return null;

  return (
    <section className={styles.source}>
      <h3>
        <i>{info.sources.length > 1 ? 'Sources' : 'Source'}</i>
      </h3>
      <div className={'d-flex flex-wrap gap-2'}>
        {info.sources.map((source) => {
          return (
            <Card
              data={source}
              key={`source-item-${source.id}-${source.name}`}
            />
          );
        })}
      </div>
    </section>
  );
};
