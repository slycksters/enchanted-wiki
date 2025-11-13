import { Table } from '@components';
import styles from './Drops.module.css';

export const Drops = ({ info }) => {
  if (!info.drops?.length) return null;

  return (
    <section className={styles.drops}>
      <h3>
        <i>Drops</i>
      </h3>
      <div>
        <Table list={info.drops} />
      </div>
    </section>
  );
};
