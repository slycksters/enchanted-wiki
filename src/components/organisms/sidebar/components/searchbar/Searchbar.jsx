import { IoMdSearch } from 'react-icons/io';
import styles from './Searchbar.module.css';

export const Searchbar = ({ onSearch }) => {
  return (
    <div className={styles.searchbar}>
      <input
        className={styles.searchInput}
        name={'search-bar-input'}
        onChange={onSearch}
        placeholder={'Search'}
        type={'text'}
      />
      <div className={styles.searchIcon}>
        <IoMdSearch size={20} />
      </div>
    </div>
  );
};
