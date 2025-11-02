import styles from './Button.module.css';

export const Button = ({ label }) => {

  return (
    <button className={styles.button} name={'button'} type={'button'}>
      {label}
    </button>
  );
};
