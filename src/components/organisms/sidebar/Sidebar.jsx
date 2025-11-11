import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { RarityList, Searchbar, SearchList } from './components';
import { filterItems } from './helpers';
import styles from './Sidebar.module.css';

export const Sidebar = ({ list, basePath, setShowSidebar, showSidebar }) => {
  const hasRarity = list?.some(
    (item) => item.rarity || item.list?.some((subItem) => subItem.rarity)
  );
  const [filteredData, setFilteredData] = useState(list);

  // Reset filter when the list (page) changes
  useEffect(() => {
    setFilteredData(list);
  }, [list]);

  const handleOnSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const newList = list.map((item) => filterItems(item, searchTerm)).filter(Boolean);
    setFilteredData(newList);
  };

  return (
    <>
      {showSidebar && (
        <div className={styles.overlay} onClick={() => setShowSidebar(false)}></div>
      )}
      <div
        className={clsx(styles.sidebar, {
          [styles.sidebarOpen]: showSidebar,
          [styles.sidebarClosed]: !showSidebar,
        })}
      >
        <Searchbar onSearch={handleOnSearch} />
        {hasRarity && <RarityList hidden={filteredData.length === 0} />}
        <SearchList
          basePath={basePath}
          list={filteredData}
        />
      </div>
    </>
  );
};