import { useState } from 'react';
import styles from './Abilities.module.css';
import { CATEGORIES } from './constants';
import { ContentComponent } from './components';
import { DetailsComponent, SidebarComponent } from '../../components';

export const AbilitiesPage = () => {
  const [selectedAbilityTab, setSelectedAbilityTab] = useState(
    CATEGORIES[0].name
  );
  const [selectedCard, setSelectedCard] = useState();

  return (
    <div className={`${styles.abilitiesPageContainer}`}>
      <SidebarComponent list={CATEGORIES} onSelectItem={setSelectedAbilityTab} />
      <div className={styles.mainContent}>
        <ContentComponent setSelectedCard={setSelectedCard} />
      </div>
      <DetailsComponent info={selectedCard} />
    </div>
  );
};
