import { useState } from 'react';
import clsx from 'clsx';
import { Searchbar, SearchList } from './components';
import styles from './Sidebar.module.css';
import { filterItems } from './helpers';
import { RarityList } from './components/rarity-list/RarityList';

export const Sidebar = ({
  list,
  onClickItem,
  onClickSubItem,
  setShowSidebar,
  showSidebar,
}) => {
  const isMultiList = list?.some((item) => item.list);
  const [filteredData, setFilteredData] = useState(list);

  const handleOnSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const newList = list
      .map((item) => filterItems(item, searchTerm))
      .filter(Boolean);

    setFilteredData(newList);
  };

  return (
    <>
      {/* Background overlay (only visible when sidebar is open) */}
      {showSidebar && (
        <div
          className={styles.overlay}
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      <div
        className={clsx(styles.sidebar, {
          [styles.sidebarOpen]: showSidebar,
          [styles.sidebarClosed]: !showSidebar,
        })}
      >
        <Searchbar onSearch={handleOnSearch} />
        <RarityList />
        <SearchList
          isMultiList={isMultiList}
          list={filteredData}
          onClickItem={onClickItem}
          onClickSubItem={onClickSubItem}
        />
      </div>
    </>
  );
};
