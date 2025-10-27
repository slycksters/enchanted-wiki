import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { SubListComponent } from './SubListComponent';
import styles from './Sidebar.module.css';

export const SidebarComponent = ({ list, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(list[0].name);

  const handleOnClickTab = (tabLabel) => {
    const newSelected = tabLabel === selectedCategory ? '' : tabLabel;
    setSelectedCategory(newSelected);
    onSelectCategory(newSelected);
  };

  return list.map((item) => {
    const isSelected = selectedCategory === item.name;

    return (
      <div className={styles.sidebar}>
        <div
          key={`list-item-${item.id}`}
          className={`${styles.categoryItemWrapper} ${
            isSelected ? styles.activeCategoryItemWrapper : ''
          }`}
        >
          <div
            className={`${styles.categoryItem} `}
            onClick={() => handleOnClickTab(item.name)}
          >
            <span title={item.name}>{item.name}</span>
            <span>
              <FaPlus />
            </span>
          </div>
          <div
            className={`${styles.subCategoryWrapper} ${
              isSelected ? styles.subCategoryWrapperOpenAnimation : ''
            }`}
          >
            <SubListComponent list={item.subList} />
          </div>
        </div>
      </div>
    );
  });
};
