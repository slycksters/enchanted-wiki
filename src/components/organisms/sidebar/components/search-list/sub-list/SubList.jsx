import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { getBackgroundGradient, formatNameToUrl } from '@helpers';
import styles from './SubList.module.css';

export const SubList = ({ list, basePath, parentCategoryName }) => {
  return (
    <div className={styles.list}>
      {list.map((subItem) => {
        const rarityColor = subItem.rarity?.color ?? 'var(--enchanted-color-blue)';
        const toPath = `${basePath}/${formatNameToUrl(parentCategoryName)}/${subItem.slug}`;

        return (
          <NavLink
            key={`sidebar-sub-item-${subItem.id}`}
            to={toPath}
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