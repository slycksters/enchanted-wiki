import styles from './Card.module.css';

export const CardComponent = ({ containerSettings, content, iconSettings }) => {
  const { height, width } = containerSettings ?? {};
  const { alt, icon, label, size } = iconSettings ?? {};

  return (
    <div className={styles.cardContainer} style={{ height, width }}>
      {content ? (
        content
      ) : (
        <div>
          <img alt={alt} src={icon} height={size} width={'auto'} />
          <p>{label}</p>
        </div>
      )}
    </div>
  );
};
