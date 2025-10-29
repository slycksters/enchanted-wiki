import { useState } from 'react';
import { RARITIES } from '../../../../data';
import styles from '../Sidebar.module.css';
import { getBackgroundGradient } from '../../../../helpers';

const RARITIES_ARRAY = Object.values(RARITIES);
const RARITY_FALLBACK_DATA = [{ id: 1, name: 'None' }];

export const SubListComponent = ({ list, onSelectSubChildCategory }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const listItems = Object.values(list);
  return RARITIES_ARRAY.map((rarity) => {
    // Filter the list for this rarity
    const filteredData = listItems.filter(
      (item) => item.rarity.name === rarity.name
    );
    const hasData = filteredData.length > 0;
    // Use fallback if no items exist
    const itemsToRender = hasData ? filteredData : RARITY_FALLBACK_DATA;

    return (
      <div key={`sub-list-${rarity.id}`}>
        <div className={styles.subListItem}>
          <small title={rarity.name} style={{ color: rarity.color }}>
            {rarity.name.toUpperCase()}
          </small>
        </div>

        {itemsToRender.map((item) => {
          const uniqueId = `${item.id}-${item.name}`;
          const isHovered = hoveredId === uniqueId;

          return (
            <div
              className={styles.subListItemChild}
              key={`sub-list-child-${item.name}-${item.id}`}
              onClick={() => onSelectSubChildCategory(item)}
              onMouseEnter={() => setHoveredId(uniqueId)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                borderLeft: `1px solid ${
                  rarity.color ?? 'var(--enchanted-text-secondary)'
                }`,
                background: isHovered && item.type
                  ? getBackgroundGradient(rarity.color, 'Right')
                  : null,
              }}
            >
              <small title={item.name}>{item.name}</small>
            </div>
          );
        })}
      </div>
    );
  });
};
