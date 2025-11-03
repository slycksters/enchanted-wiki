import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import clsx from 'clsx';
import styles from './SearchList.module.css';
import { SubList } from './sub-list';

export const SearchList = ({
  isMultiList,
  list,
  onClickItem,
  onClickSubItem,
}) => {
  const subItemHeight = 35.5;
  const [selectedItem, setSelectedItem] = useState(list[0]);
  const [selectedSubItem, setSelectedSubItem] = useState(
    list?.[0]?.list?.[0] || null
  );

  // --- Multi List is Enabled ---
  const handleOnClickParentItem = (item) => {
    if (`${selectedItem.name}-${selectedItem.id}` === `${item.name}-${item.id}`)
      setSelectedItem({});
    else setSelectedItem(item);
  };

  const handleOnClickSubItem = (item) => {
    if (
      `${selectedSubItem.name}-${selectedSubItem.id}` !==
      `${item.name}-${item.id}`
    ) {
      setSelectedSubItem(item);
      onClickSubItem(item);
    }
  };

  // --- Multi List is Disabled ---
  const handleOnClickItem = (item) => {
    if (selectedItem.name !== item.name) {
      setSelectedItem(item);
      onClickItem(item);
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

          const parentItemClasses = clsx(
            isMultiList ? styles.parentItem : styles.item,
            isSelected
              ? isMultiList
                ? styles.activeParentItem
                : styles.activeItem
              : null
          );

          const handleOnClick = () => {
            if (!haveSubList) handleOnClickItem(item);
            else handleOnClickParentItem(item);
          };

          return (
            <div
              className={'px-3'}
              key={`sidebar-item-${type?.name}-${name}-${id}`}
            >
              <div
                className={parentItemClasses}
                onClick={handleOnClick}
                style={{
                  borderColor: !isMultiList ? item.rarity?.color : null,
                }}
              >
                <span hidden={isMultiList && !haveSubList} title={name}>
                  {name}
                </span>

                {haveSubList && (
                  <span>
                    <FaPlus className={styles.plusIcon} />
                  </span>
                )}
              </div>

              {subList && (
                <div
                  className={styles.subList}
                  style={{
                    maxHeight: isSelected ? subList.length * subItemHeight : 0,
                  }}
                >
                  <SubList
                    list={subList}
                    onClickSubItem={handleOnClickSubItem}
                    selectedSubItem={selectedSubItem}
                  />
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};
