import { Table } from '@components';
import styles from './Ware.module.css';

export const Ware = ({ info }) => {
  if (!info.ware?.length) return null;

  return (
    <section className={styles.ware}>
      <h3><i>Ware</i></h3>
      <div>
        <Table list={info.ware} />
      </div>
    </section>
  );
};
