import { Table } from '@components';
import styles from './Ware.module.css';

export const Ware = ({ info }) => {
  if (!info.ware?.length) return null;

  return (
    <section className={styles.ware}>
      <h4>Ware:</h4>
      <div>
        <Table list={info.ware} />
      </div>
    </section>
  );
};
