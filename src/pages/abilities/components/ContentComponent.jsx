import styles from '../Abilities.module.css';
import { CATEGORIES } from '../constants';
import { DATA_MAP } from '../../../constants/dataMap.constant';

export const ContentComponent = () => {
  return (
    <div className={styles.contentComponentContainer}>
      {/* Category Headers */}
      {CATEGORIES.map((category) => {
        const data = DATA_MAP[category.label];

        return (
          <div
            key={`ability-content-category-header-${category.id}`}
            className={styles.categoryWrapper}
          >
            <div className={styles.categoryHeader}>{category.label}</div>

            <div className={`${styles.contentWrapper} grid grid-cols-6 gap-5`}>
              {data.map((item) => {
                return (
                  <div className={styles.contentCard}>
                    <div className={styles.contentCardImage}>
                      <img alt={item.label} src={item.image} />
                    </div>
                    <div className={styles.contentCardLabel}>{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
