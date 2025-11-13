import { Table } from '@components';
import styles from './Sources.module.css';

export const Source = ({ info }) => {
  if (!info.sources?.length) return null;

  return (
    <section className={styles.source}>
      <h3><i>Sources</i></h3>
      <div>
        <Table list={info.sources} />
      </div>
    </section>
  );
};
