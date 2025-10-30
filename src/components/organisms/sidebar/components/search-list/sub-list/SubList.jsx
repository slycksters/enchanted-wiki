import styles from './SubList.module.css';

export const SubList = ({ list, onClickSubItem, selectedSubItem }) => {
  return (
    <div className={styles.list}>
      {list.map((subItem) => {
        const isSelected = selectedSubItem.name === subItem.name;

        return (
          <div
            key={`sidebar-sub-item-${subItem.type.name}-${subItem.name}-${subItem.id}}`}
            className={`${styles.item} ${isSelected ? styles.activeItem : ''}`}
            onClick={() => onClickSubItem(subItem)}
          >
            <span title={subItem.name}>{subItem.name}</span>
          </div>
        );
      })}
    </div>
  );
};
