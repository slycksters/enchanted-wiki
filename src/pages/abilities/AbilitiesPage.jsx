import { useState } from 'react';
import styles from './Abilities.module.css';
import { RaritiesTabComponent } from './components/RaritiesTabComponent';
import { TABS } from './constants';

export const AbilitiesPage = () => {
  const [selectedAbilityTab, setSelectedAbilityTab] = useState(TABS[0].label);

  const handleOnClickTab = (tabLabel) => {
    setSelectedAbilityTab(tabLabel);
  };

  return (
    <div
      className={`${styles.abilitiesPageContainer} px-20 flex flex-col h-full`}
    >
      {/* Ability Tabs */}
      <div className={'grid grid-cols-5 gap-[4px]'}>
        {TABS.map((tab) => {
          const isSelected = selectedAbilityTab === tab.label;
          return (
            <div
              className={`${styles.tabItem} ${
                isSelected ? styles.activeTabItem : ''
              }`}
              key={`abilities-tab-${tab.id}`}
              onClick={() => handleOnClickTab(tab.label)}
            >
              <span title={tab.label}>{tab.label}</span>
            </div>
          );
        })}
      </div>

      <div className={'flex-1 flex'}>
        <RaritiesTabComponent selectedAbilityTab={selectedAbilityTab} />
      </div>
    </div>
  );
};
