import { useState } from 'react';
import { Searchbar, SearchList } from './components';
import styles from './Sidebar.module.css';

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
      .map((item) => {
        if (item.list) {
          // --- Filter sublist
          const filteredSubList = item.list.filter((sub) =>
            sub.name.toLowerCase().includes(searchTerm)
          );

          // --- Only include the parent if it has matching sublist items
          if (filteredSubList.length > 0) {
            return { ...item, list: filteredSubList };
          }

          return null; // no match in sublist
        } else {
          // --- Parent without sublist
          if (item.name.toLowerCase().includes(searchTerm)) {
            return item;
          }
          return null;
        }
      })
      .filter(Boolean); // remove nulls

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
        className={`${styles.sidebar} ${
          showSidebar ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <Searchbar onSearch={handleOnSearch} />
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
