import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { SubListComponent } from './components/SubListComponent';
import styles from './Sidebar.module.css';

export const SidebarComponent = ({
  list,
  onSelectItem,
  setShowSidebar,
  showSidebar,
}) => {
  const [selectedItem, setSelectedItem] = useState(list[0].name);

  // --- Handle on click category
  const handleOnClickItem = (item) => {
    const newSelected = item === selectedItem ? '' : item;
    setSelectedItem(newSelected);
  };

  return (
    <>
      {/* Background overlay (only visible when sidebar is open) */}
      {showSidebar && (
        <div className={styles.overlay} onClick={() => setShowSidebar(false)}></div>
      )}

      <div
        className={`${styles.sidebar} ${
          showSidebar ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div>
          {list.map((item) => {
            const isSelected = selectedItem === item.name;

            return (
              <div
                key={`list-item-${item.id}`}
                className={`${styles.listItemWrapper} ${
                  isSelected ? styles.activeListItemWrapper : ''
                }`}
              >
                <div
                  className={`${styles.listItem} `}
                  onClick={() => handleOnClickItem(item.name)}
                >
                  <span title={item.name}>{item.name}</span>
                  <span>
                    <FaPlus />
                  </span>
                </div>
                <div
                  className={`${styles.subListWrapper} ${
                    isSelected ? styles.subListWrapperOpenAnimation : ''
                  }`}
                >
                  <SubListComponent list={item.subList} onSelectSubChildCategory={onSelectItem} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
