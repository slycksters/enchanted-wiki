import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { getBackgroundGradient } from '@helpers';
import { getItemPath } from '@router/getItemPath.helper';
import styles from './SubList.module.css';

export const SubList = ({ list, basePath, parentCategoryName }) => {
  return (
    <div className={styles.list}>
      {list.map((subItem) => {
        const rarityColor = subItem.rarity?.color ?? 'var(--enchanted-color-blue)';

        return (
          <NavLink
            key={`sidebar-sub-item-${subItem.id}`}
            to={getItemPath(subItem)}
            className={({ isActive }) =>
              clsx(styles.item, { [styles.activeItem]: isActive })
            }
            style={({ isActive }) => ({
              borderColor: subItem.rarity?.color,
              background: isActive ? getBackgroundGradient(rarityColor, 'Right') : null,
            })}
            title={subItem.name}
          >
            <span>{subItem.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};