import styles from '../InfoPanel.module.css';

export const ImageComponent = ({ info }) => {
  return (
    <>
      <div className={styles.headerText}>
        <p>Attachment</p>
      </div>
      <section className={styles.imageWrapper}>
        <img alt={info.name} src={info.image} />
      </section>
    </>
  );
};