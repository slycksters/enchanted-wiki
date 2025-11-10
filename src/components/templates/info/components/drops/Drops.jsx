import { Table } from '@components';
import styles from './Drops.module.css';

export const Drops = ({ info }) => {
  if (!info.drops?.length) return null;

  return (
    <section className={styles.drops}>
      <h4 style={{ marginTop: info.sources?.length > 0 ? 0 : null }}>
        Drops:
      </h4>
      <div>
        <Table list={info.drops} />
      </div>
    </section>
  );
};
