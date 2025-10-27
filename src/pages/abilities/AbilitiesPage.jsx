import { useState } from 'react';
import styles from './Abilities.module.css';
import { CATEGORIES } from './constants';
import { CatergoriesComponent, ContentComponent } from './components';

export const AbilitiesPage = () => {
  const [selectedAbilityTab, setSelectedAbilityTab] = useState(CATEGORIES[0].label);

  return (
    <div className={`${styles.abilitiesPageContainer}`}>
      {/* Ability Categories */}
      <div className={styles.sidebar}>
        <section className={styles.sidebarCategories}>
          <CatergoriesComponent
            selectedAbilityTab={selectedAbilityTab}
            setSelectedAbilityTab={setSelectedAbilityTab}
          />
        </section>
      </div>
      <div className={styles.mainContent}>
        <ContentComponent />
      </div>
    </div>
  );
};
