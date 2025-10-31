import { useState } from 'react';
import clsx from 'clsx';
import styles from './SearchList.module.css';
import { SubList } from './sub-list';

export const SearchList = ({
  isMultiList,
  list,
  onClickItem,
  onClickSubItem,
}) => {
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
      setSelectedSubItem(item);
      onClickSubItem(item);
    }
  };

  return (
    <div className={styles.list}>
      {list?.length === 0 ? (
        <div className={styles.verbiage}>No Data Found</div>
      ) : (
        list.map((item) => {
          const { name, id, list: subList, type } = item;
          const isSelected = selectedItem.name === name;
          const haveSubList = subList?.length > 0;

          return (
            <div
              key={`sidebar-item-${type?.name}-${name}-${id}`}
              className={clsx(
                isMultiList ? styles.parentItem : styles.item,
                isSelected
                  ? isMultiList
                    ? styles.activeParentItem
                    : styles.activeItem
                  : null
              )}
              onClick={!haveSubList ? () => handleOnClickItem(item) : undefined}
              style={{ borderColor: !isMultiList ? item.rarity.color : null }}
            >
              <span hidden={isMultiList && !haveSubList} title={name}>
                {name}
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
        })
      )}
    </div>
  );
};
