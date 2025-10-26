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

export const RaritiesTabComponent = ({ selectedAbilityTab }) => {
  const raritiesArray = Object.values(RARITIES).sort((a, b) => b.id - a.id);
  const DATA_MAP = {
    [TABS[0].label]: RACES,
    [TABS[1].label]: TRAITS,
    [TABS[2].label]: MAGICS,
    [TABS[3].label]: PASSIVE_MAGICS,
    [TABS[4].label]: PASSIVE_SKILLS,
    // [TABS[5].label]: TITLES,
  };

  return (
    <div className={'flex flex-col flex-1 gap-[4px] h-full'}>
      {raritiesArray.map((rarity, index) => {
        const dataInThisRarity = DATA_MAP[selectedAbilityTab].filter(
          (race) => race.rarity === rarity.label
        );
        const firstElement = index === 0;
        const hasData = dataInThisRarity.length > 0;

        return (
          <div
            key={`rarity-tab-${rarity.id}`}
            className={`${styles.itemRow} flex h-full ${
              firstElement ? 'mt-[5px]' : 'mt-[1px]'
            }`}
          >
            <div
              className={`${styles.subTabItem} mr-[4px]`}
              style={{ color: `${rarity.color}` }}
            >
              <span title={rarity.label}>{rarity.label}</span>
            </div>
            <div
              className={styles.subTabItemContent}
              style={{ justifyContent: hasData ? 'normal' : 'center' }}
            >
              {hasData ? (
                <>
                  {dataInThisRarity.map((data) => {
                    return (
                      <div
                        key={`${data.label}-content-card-item-${data.id}`}
                        className={styles.contentCardItem}
                      >
                        <img alt={data.label} src={data.image} />
                      </div>
                    );
                  })}
                </>
              ) : (
                <span className={styles.noContentVerbiage}>
                  No {selectedAbilityTab.toLowerCase()} yet
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
