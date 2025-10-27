import styles from '../Abilities.module.css';
import { CATEGORIES } from '../constants/categories.constant';
import { FaPlus } from 'react-icons/fa6';
import { SubCategoriesComponent } from './SubCategoriesComponent';
import { DATA_MAP } from '../../../constants/dataMap.constant';

export const CatergoriesComponent = ({
  selectedAbilityTab,
  setSelectedAbilityTab,
}) => {
  const handleOnClickTab = (tabLabel) => {
    const newSelected = tabLabel === selectedAbilityTab ? '' : tabLabel;
    setSelectedAbilityTab(newSelected);
  };

  return CATEGORIES.map((category) => {
    const isSelected = selectedAbilityTab === category.name;
    const subCategoresData = DATA_MAP[category.name];

    return (
      <div
        key={`abilities-category-${category.id}`}
        className={`${styles.categoryItemWrapper} ${
          isSelected ? styles.activeCategoryItemWrapper : ''
        }`}
      >
        <div
          className={`${styles.categoryItem} `}
          onClick={() => handleOnClickTab(category.name)}
        >
          <span title={category.name}>{category.name}</span>
          <span>
            <FaPlus />
          </span>
        </div>
        <div
          className={`${styles.subCategoryWrapper} ${
            isSelected ? styles.subCategoryWrapperOpenAnimation : ''
          }`}
        >
          <SubCategoriesComponent data={subCategoresData} />
        </div>
      </div>
    );
  });
};
