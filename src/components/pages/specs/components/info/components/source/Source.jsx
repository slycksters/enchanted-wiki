import styles from './Source.module.css';
import { Table } from '../../../../../../organisms';

export const Source = ({ info }) => {
  return (
    <section className={styles.source}>
      <h4>Source:</h4>
      <div className={'row'}>
        <div className="col-12 col-md-8 col-lg-6">
          <Table list={info.sources} />
        </div>
      </div>
    </section>
  );
};
