import styles from './Button.module.css';

export const Button = ({ label }) => {

  return (
    <button className={styles.button} type={'button'}>
      {label}
    </button>
  );
};
