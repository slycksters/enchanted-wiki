import styles from '../Abilities.module.css';
import { CATEGORIES } from '../constants';
import { DATA_MAP } from '../../../constants/dataMap.constant';

export const ContentComponent = ({ setSelectedCard }) => {
  return (
    <div className={styles.contentComponentContainer}>
      {/* Category Headers */}
      {CATEGORIES.map((category) => {
        const data = DATA_MAP[category.name];

        return (
          <div
            key={`ability-content-category-header-${category.id}`}
            className={styles.categoryWrapper}
          >
            <div className={styles.categoryBorders}>
              <div className={styles.categoryHeader}>{category.name}</div>

              <div
                className={`${styles.contentWrapper} grid sm:grid-cols-2 md:grid-cols-6 gap-5`}
              >
                {data.map((item) => {
                  return (
                    <div
                      key={`ability-content-category-data-${item.name}-${item.id}`}
                      className={styles.contentCard}
                      onClick={() => setSelectedCard(item)}
                    >
                      <div className={styles.contentCardImage}>
                        <img alt={item.name} src={item.image} />
                      </div>
                      <div className={styles.contentCardLabel}>{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
