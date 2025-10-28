import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { SubListComponent } from './components/SubListComponent';
import styles from './Sidebar.module.css';

export const SidebarComponent = ({ list, onSelectItem }) => {
  const [selectedItem, setSelectedItem] = useState(list[0].name);

  const handleOnClickItem = (item) => {
    const newSelected = item === selectedItem ? '' : item;
    setSelectedItem(newSelected);
    onSelectItem(newSelected);
  };

  return (
    <div className={styles.sidebar}>
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
              <SubListComponent list={item.subList} />
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
