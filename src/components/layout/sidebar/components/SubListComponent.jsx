import { RARITIES } from '../../../../data';
import styles from '../Sidebar.module.css';

const RARITIES_ARRAY = Object.values(RARITIES);
const RARITY_FALLBACK_DATA = [{ id: 1, name: 'None' }];

export const SubListComponent = ({ list }) => {
  const listItems = Object.values(list);
  return RARITIES_ARRAY.map((rarity) => {
    // Filter the list for this rarity
    const filteredData = listItems.filter(
      (item) => item.rarity.name === rarity.name
    );
    const hasData = filteredData.length > 0;
    // Use fallback if no items exist
    const itemsToRender = hasData ? filteredData : RARITY_FALLBACK_DATA;

    return (
      <div key={`sub-list-${rarity.id}`}>
        <div className={styles.subListItem}>
          <small title={rarity.name} style={{ color: rarity.color }}>
            {rarity.name.toUpperCase()}
          </small>
        </div>

        {itemsToRender.map((item) => (
          <div
            className={styles.subListItemChild}
            key={`sub-list-child-${item.name}-${item.id}`}
            style={{ borderLeft: `1px solid ${rarity.color ?? 'var(--enchanted-text-secondary)'}` }}
          >
            <small title={item.name}>{item.name}</small>
          </div>
        ))}
      </div>
    );
  });
};
