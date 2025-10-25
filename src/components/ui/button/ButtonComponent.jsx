import styles from './Button.module.css';

export const ButtonComponent = (props) => {
  const { className, label } = props;

  return (
    <button className={`${styles.button} ${className}`} type={'button'}>
      {label}
    </button>
  );
};
