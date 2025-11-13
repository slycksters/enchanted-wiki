import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import styles from './SearchModal.module.css';
import { DATA } from '@mappers';
import { getItemPath } from '@router/getItemPath.helper';

const SEARCH_LIST = Object.values(DATA).flat();

export const SearchModal = ({ show, onHide }) => {
  const [searchKey, setSearchKey] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    const key = e.target.value;
    setSearchKey(key);

    var filteredList = SEARCH_LIST.filter((item) =>
      item.name.toLowerCase().includes(key.toLowerCase())
      || item.subType?.name.toLowerCase() === key.toLowerCase()
      || item.type?.name.toLowerCase() === key.toLowerCase()
    );
    setData(filteredList);
  };

  const groupData = (list) => {
    return list.reduce((acc, item) => {
      const groupKey = item.subType?.name || item.type?.name || 'Other';
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(item);
      return acc;
    }, {});
  };

  return (
    <Modal
      backdropClassName={styles.backdrop}
      dialogClassName={styles.searchDialog}
      onHide={onHide}
      size={'lg'}
      show={show}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <Modal.Header className={styles.header}>
        <CiSearch />
        <input
          className={styles.searchBar}
          onChange={handleSearch}
          placeholder={'Search'}
        />
        <button className={styles.escButton} onClick={onHide} type={'button'}>
          esc
        </button>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        {searchKey?.length > 0 ? (
          data.length > 0 ? (
            <div className={styles.searchList}>
              {Object.entries(groupData(data)).map(([groupName, items]) => (
                <div key={`group-${groupName}`} className={styles.group}>
                  <div className={styles.groupLabel}>{groupName}</div>
                  {items.map((item) => (
                    <NavLink
                      className={styles.searchItem}
                      key={`search-modal-item-${item.id}-${item.name}`}
                      to={getItemPath(item)}
                      onClick={onHide}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.verbiage}>No result found</div>
          )
        ) : (
          <div className={styles.verbiage}>Search to display data</div>
        )}
      </Modal.Body>
      <Modal.Footer className={styles.footer}>reign-studios</Modal.Footer>
    </Modal>
  );
};
