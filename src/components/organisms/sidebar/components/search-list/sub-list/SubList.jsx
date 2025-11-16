import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { getBackgroundGradient } from '@helpers';
import { getItemPath } from '@router/getItemPath.helper';
import styles from './SubList.module.css';
import { useScrollToElement } from '@hooks';

export const SubList = ({ list, onHideSidebar }) => {
  return (
    <div className={styles.list}>
      {list.map((subItem) => {
        const rarityColor =
          subItem.rarity?.color ?? 'var(--enchanted-color-blue)';

        return (
          <NavLink
            className={({ isActive }) =>
              clsx(styles.item, { [styles.activeItem]: isActive })
            }
            key={`sidebar-sub-item-${subItem.id}`}
            onClick={onHideSidebar}
            style={({ isActive }) => ({
              borderColor: subItem.rarity?.color,
              background: isActive
                ? getBackgroundGradient(rarityColor, 'Right')
                : null,
            })}
            title={subItem.name}
            to={getItemPath(subItem)}
          >
            {({ isActive }) => {
              // Now we can use the hook inside the render prop function where `isActive` is available.
              const elementRef = useScrollToElement(
                'sidebar',
                isActive,
                [location.pathname], // Re-run the effect when the URL changes.
                { delay: 350 } // Delay to wait for the accordion animation. Adjust as needed.
              );

              return <span ref={elementRef}>{subItem.name}</span>;
            }}
          </NavLink>
        );
      })}
    </div>
  );
};
