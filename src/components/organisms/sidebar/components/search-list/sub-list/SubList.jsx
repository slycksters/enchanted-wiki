import clsx from 'clsx';
import styles from './SubList.module.css';

export const SubList = ({ list, onClickSubItem, selectedSubItem }) => {
  return (
    <div className={styles.list}>
      {list.map((subItem) => {
        const isSelected = selectedSubItem.name === subItem.name;

        return (
          <div
            key={`sidebar-sub-item-${subItem.type.name}-${subItem.name}-${subItem.id}}`}
            className={clsx(styles.item, { [styles.activeItem]: isSelected })}
            onClick={() => onClickSubItem(subItem)}
            style={{ borderColor: subItem.rarity.color }}
          >
            <span title={subItem.name}>{subItem.name}</span>
          </div>
        );
      })}
    </div>
  );
};
