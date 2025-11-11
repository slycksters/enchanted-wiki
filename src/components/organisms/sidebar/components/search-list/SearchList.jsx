import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa6';
import clsx from 'clsx';
import { getBackgroundGradient, formatNameToUrl } from '@helpers';
import { SubList } from './sub-list';
import styles from './SearchList.module.css';

export const SearchList = ({ list, basePath }) => {
  const location = useLocation(); // <-- Get the current location object
  const subItemHeight = 35.5;

  // This function determines which category should be open based on the current URL
  const getOpenCategoryFromUrl = () => {
    const pathParts = location.pathname.split('/');
    // For a nested route like /abilities/magics/wind, the category slug is at index 2
    if (pathParts.length > 2) {
      const activeCategorySlug = pathParts[2];
      const activeCategory = list.find(
        (category) => formatNameToUrl(category.name) === activeCategorySlug
      );
      if (activeCategory) {
        return activeCategory.name;
      }
    }
    // Fallback: if no category in URL matches, open the first one in the list
    return list.find(item => item.list)?.name || '';
  };
  
  const [openParent, setOpenParent] = useState(getOpenCategoryFromUrl());

  useEffect(() => {
    setOpenParent(getOpenCategoryFromUrl());
  }, [location.pathname, list]);

  const handleToggleParent = (name) => {
    setOpenParent(openParent === name ? '' : name);
  };
  
  const isNestedList = list.some(item => item.list?.length > 0);

  return (
    <div className={clsx(isNestedList ? styles.parentList : styles.list, 'mx-3')}>
      {list?.length === 0 ? (
        <div className={styles.verbiage}>No Data Found</div>
      ) : (
        list.map((item) => {
          const hasSubList = item.list?.length > 0;

          if (hasSubList) {
            const { id, name, list: subList } = item;
            const isOpen = openParent === name;
            return (
              <div key={`sidebar-parent-${id}`}>
                <div
                  className={clsx(styles.parentItem, { [styles.activeParentItem]: isOpen })}
                  onClick={() => handleToggleParent(name)}
                >
                  <span title={name}>{name}</span>
                  <span><FaPlus className={styles.plusIcon} /></span>
                </div>
                <div
                  className={styles.subList}
                  style={{ maxHeight: isOpen ? subList.length * subItemHeight : 0 }}
                >
                  <SubList
                    list={subList}
                    basePath={basePath}
                    parentCategoryName={name}
                  />
                </div>
              </div>
            );
          } else {
            const { id, name, rarity, slug } = item;
            const toPath = `${basePath}/${slug}`; 
            return (
              <NavLink
                key={`sidebar-item-${id}`}
                to={toPath}
                className={({ isActive }) => clsx(styles.item, { [styles.activeItem]: isActive })}
                style={({ isActive }) => ({
                  borderColor: rarity?.color,
                  background: isActive ? getBackgroundGradient('var(--enchanted-color-blue)', 'Right') : null,
                })}
              >
                <span title={name}>{name}</span>
              </NavLink>
            );
          }
        })
      )}
    </div>
  );
};