import { useState } from 'react';
import styles from './SearchList.module.css';
import { SubList } from './sub-list';

export const SearchList = ({
  isMultiList,
  list,
  onClickItem,
  onClickSubItem,
}) => {
  const hoveredStyle = {
    color: 'var(--enchanted-text-primary)',
    cursor: 'pointer',
  };
  const [hoveredName, setHoveredName] = useState(null);
  const [selectedItem, setSelectedItem] = useState(list[0]);
  const [selectedSubItem, setSelectedSubItem] = useState(
    list?.[0]?.list?.[0] || null
  );

  const handleOnClickItem = (item) => {
    if (selectedItem.name !== item.name) {
      setSelectedItem(item);
      onClickItem(item);
    }
  };

  const handleOnClickSubItem = (item) => {
    if (selectedSubItem.name !== item.name) {
      onClickSubItem(item);
      setSelectedSubItem(item);
    }
  };

  return (
    <div className={styles.list}>
      {list?.length === 0 ? (
        <div className={styles.verbiage}>No Data Found</div>
      ) : (
        <>
          {list.map((item) => {
            const uniqueName = `${item.name}-${item.id}`;
            const isHovered = hoveredName === uniqueName;
            const isSelected = selectedItem.name === item.name;
            const subList = item.list;
            const haveSubList = subList?.length;

            return (
              <div
                key={`sidebar-item-${item.type?.name}-${item.name}-${item.id}`}
                className={`${styles.item} ${
                  isSelected || haveSubList ? styles.activeItem : ''
                }`}
                onClick={!haveSubList ? () => handleOnClickItem(item) : null}
                onMouseEnter={() => setHoveredName(uniqueName)}
                onMouseLeave={() => setHoveredName(null)}
                style={!haveSubList && isHovered ? hoveredStyle : null}
              >
                <span hidden={isMultiList && !haveSubList} title={item.name}>
                  {item.name}
                </span>
                {subList && (
                  <SubList
                    list={subList}
                    onClickSubItem={handleOnClickSubItem}
                    selectedSubItem={selectedSubItem}
                  />
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
