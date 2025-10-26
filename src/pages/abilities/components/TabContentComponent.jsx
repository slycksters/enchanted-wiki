import { useEffect, useState } from 'react';
import styles from '../Abilities.module.css';
import { RARITIES } from '../../../constants';
import {
  MAGICS,
  PASSIVE_MAGICS,
  PASSIVE_SKILLS,
  RACES,
  TABS,
  TITLES,
  TRAITS,
} from '../constants';
import { StatsComponent } from './StatsComponent';

export const TabContentComponent = ({ selectedAbilityTab }) => {
  // --- Dynamic States
  const [hoveredSubTabId, setHoveredSubTabId] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [selectedRarity, setSelectedRarity] = useState(RARITIES.common.label);
  const [selectedCard, setSelectedCard] = useState(RACES[0]);

  // --- CONSTANTS
  const RARITIES_ARRAY = Object.values(RARITIES);
  const DATA_MAP = {
    [TABS[0].label]: RACES,
    [TABS[1].label]: TRAITS,
    [TABS[2].label]: MAGICS,
    [TABS[3].label]: PASSIVE_MAGICS,
    [TABS[4].label]: PASSIVE_SKILLS,
    // [TABS[5].label]: TITLES,
  };
  const DATA = DATA_MAP[selectedAbilityTab].filter(
    (item) => item.rarity === selectedRarity
  );

  return (
    <div className={'grid grid-cols-3 gap-5'}>
      <div className={'col-span-2'}>
        <div className={'grid grid-cols-4 gap-5 mt-5'}>
          {RARITIES_ARRAY.map((rarity) => {
            const isHovered = hoveredSubTabId === rarity.id;
            const isSelected = selectedRarity === rarity.label;

            return (
              <div
                key={`rarity-tab-${rarity.id}`}
                onClick={() => setSelectedRarity(rarity.label)}
                onMouseEnter={() => setHoveredSubTabId(rarity.id)}
                onMouseLeave={() => setHoveredSubTabId(null)}
              >
                <div
                  className={`${styles.subTabItem}`}
                  style={{
                    borderColor: isHovered || isSelected ? rarity.color : null,
                    color: `${rarity.color}`,
                    transition: 'border-color 0.2s ease-in-out',
                  }}
                >
                  <span title={rarity.label}>{rarity.label}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`${styles.subTabItemContent} mt-5`}>
          {DATA.length ? (
            <>
              {DATA.map((item) => {
                const isHovered = hoveredCardId === item.id;
                const rarity = RARITIES[item.rarity.toLowerCase()];

                return (
                  <div
                    key={`${item.label}-content-card-item-${item.id}`}
                    className={styles.contentCardItem}
                    onClick={() => setSelectedCard(item)}
                    onMouseEnter={() => setHoveredCardId(item.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                  >
                    <img
                      alt={item.label}
                      src={item.image}
                      style={{
                        filter: isHovered
                          ? `drop-shadow(0 0 8px ${rarity.color})`
                          : null,
                        transform: 'scale(1.05)',
                      }}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <div className={styles.noContentVerbiage}>
              No {selectedAbilityTab.toLowerCase()} yet
            </div>
          )}
        </div>
      </div>
      <div className={'mt-5'}>
        <StatsComponent selectedCard={selectedCard} />
      </div>
    </div>
  );
};
