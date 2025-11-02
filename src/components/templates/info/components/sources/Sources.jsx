import styles from './Sources.module.css';
import { Table } from '@components';

export const Source = ({ info }) => {
  if (!info.sources?.length) return null;

  return (
    <section className={`${styles.source} col col-12 col-md-6 col-lg-6`}>
      <h4>Sources:</h4>
      <div>
        <Table list={info.sources} />
      </div>
    </section>
  );
};
