import styles from './Drops.module.css';
import { Table } from '@components';

export const Drops = ({ info }) => {
  if (!info.drops?.length) return null;

  return (
    <section className={styles.drops}>
      <h4>Drops:</h4>
      <div>
        <Table list={info.drops} />
      </div>
    </section>
  );
};
