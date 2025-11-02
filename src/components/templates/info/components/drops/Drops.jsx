import styles from './Drops.module.css';
import { Table } from '@components';

export const Drops = ({ info }) => {
  if (!info.drops?.length) return null;

  return (
    <section className={`${styles.drops} col col-12 col-md-6 col-lg-6`}>
      <h4>Drops:</h4>
      <div>
        <Table list={info.drops} />
      </div>
    </section>
  );
};
