import styles from '../Abilities.module.css';
import { CATEGORIES } from '../constants';
import { DATA_MAP } from '../../../constants/dataMap.constant';
import { useState } from 'react';

const getHoveredBackgroundStyle = (color) => {
  return `linear-gradient(
    135deg,
    ${color},
    var(--enchanted-bg-accent),
    var(--enchanted-bg-accent),
    var(--enchanted-bg-secondary),
    var(--enchanted-bg-secondary),
    var(--enchanted-bg-primary)
  )`;
};

export const ContentComponent = ({ setSelectedInfo }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
                className={`${styles.contentWrapper} grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8 gap-2`}
              >
                {data.map((item) => {
                  const uniqueName = `${item.type.name}-${item.id}`;
                  const isHovered = hoveredCard === uniqueName;
                  return (
                    <div
                      key={`ability-content-category-data-${item.name}-${item.id}`}
                      className={styles.contentCard}
                      onMouseEnter={() => setHoveredCard(uniqueName)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => setSelectedInfo(item)}
                      style={{
                        background: isHovered
                          ? getHoveredBackgroundStyle(item.rarity.color)
                          : null,
                      }}
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
