import { useState } from 'react';
import clsx from 'clsx';
import { RARITIES } from '@data';
import { extractValues } from '@helpers';
import styles from './Rarity.module.css';

export const RarityList = ({ hidden }) => {
  const [showList, setShowList] = useState(false);

  const rarities = extractValues(RARITIES);
  return (
    <div hidden={hidden}>
      <button
        className={styles.viewRarityButton}
        onClick={() => setShowList(!showList)}
      >
        View Rarity List
      </button>
      <div
        className={clsx(styles.rarityList, {
          [styles.open]: showList,
        })}
      >
        {rarities.map((rarity) => (
          <div
            key={`rarity-list-item-${rarity.name}-${rarity.id}`}
            className={styles.rarityItem}
          >
            <span>{rarity.name}</span>
            <div
              className={styles.line}
              style={{ backgroundColor: rarity.color }}
            />
            <div
              className={styles.circle}
              style={{ backgroundColor: rarity.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
