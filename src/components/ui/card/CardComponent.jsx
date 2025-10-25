import styles from './Card.module.css';

export const CardComponent = ({ containerSettings, content, iconSettings }) => {
  const { height, width } = containerSettings ?? {};
  const { alt, color, icon: Icon, label, size } = iconSettings ?? {};

  return (
    <div className={styles.cardContainer} style={{ height, width }}>
      {content ? (
        content
      ) : (
        <div className={styles.cardIconContainer} style={{ color }}>
          {Icon && (
            <Icon
              className={styles.cardIcon}
              color={color ?? 'var(--enchanted-color-white'}
              size={size ?? '50'}
              title={alt}
            />
          )}
          <p className={styles.cardIconLabel}>{label}</p>
        </div>
      )}
    </div>
  );
};
