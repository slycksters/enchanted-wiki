import { cloneElement, useState } from 'react';
import { InfoPanelComponent, SidebarComponent } from '..';
import styles from './styles.module.css';

export const LayoutComponent = ({ categories, children, defaultInfo }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.name || ''
  );
  const [selectedInfo, setSelectedInfo] = useState(defaultInfo);

  return (
    <div className={styles.layoutWrapper}>
      <SidebarComponent list={categories} onSelectItem={setSelectedCategory} />

      <div className={styles.layoutContent}>
        {children &&
          cloneElement(children, {
            selectedCategory,
            setSelectedInfo,
          })}
      </div>

      <InfoPanelComponent info={selectedInfo} />
    </div>
  );
};
