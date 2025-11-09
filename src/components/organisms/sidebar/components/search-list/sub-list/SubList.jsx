import { useState } from 'react';
import clsx from 'clsx';
import styles from './SubList.module.css';
import { getBackgroundGradient } from '@helpers';

export const SubList = ({ list, onClickSubItem, selectedSubItem }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className={styles.list}>
      {list.map((subItem) => {
        const uniqueId = `${subItem.id}-${subItem.name}`;
        const isSelected = uniqueId === `${selectedSubItem.id}-${selectedSubItem.name}`;
        const isHovered = hoveredId === uniqueId;
        const rarityColor = subItem.rarity?.color ?? 'var(--enchanted-color-blue)';

        return (
          <div
            key={`sidebar-sub-item-${subItem.type.name}-${subItem.name}-${subItem.id}}`}
            className={clsx(styles.item, { [styles.activeItem]: isSelected })}
            onClick={() => onClickSubItem(subItem)}
            onMouseEnter={() => setHoveredId(uniqueId)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              borderColor: subItem.rarity?.color,
              background: isSelected || isHovered
                ? getBackgroundGradient(rarityColor, 'Right')
                : null,
            }}
          >
            <span title={subItem.name}>{subItem.name}</span>
          </div>
        );
      })}
    </div>
  );
};
