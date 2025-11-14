import styles from './Description.module.css';

export const Description = ({ info }) => {
  return (
    <section className={styles.description}>
      <div className={'row'}>
        <div className={'col col-12 col-md-12 col-lg-6'}>
          <h3>
            <i>Description</i>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: info.description }} />
        </div>
      </div>
    </section>
  );
};
