import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styles from '../Home.module.css';
import { CardComponent } from '../../../components/ui';
import { PAGE_LINKS } from '../../../constants';

// --- CONSTANTS
const CARD_CONTAINER_SETTINGS = { height: '200px', width: '100%' };
const PAGINATION_ARROW_SETTINGS = {
  color: 'var(--enchanted-text-tertiary)',
  cursor: 'pointer',
  size: 40,
};
const PAGE_SIZE = 5;

// --- COMPONENT
export const NavigationCardsComponent = () => {
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + PAGE_SIZE;

  const handlePaginate = (direction) => {
    if (direction === 'left' && startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
    if (direction === 'right' && startIndex < PAGE_LINKS.length - PAGE_SIZE) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      {/* Card List */}
      <section className={`${styles.navigationCards} grid grid-cols-5`}>
        {PAGE_LINKS.slice(startIndex, endIndex).map((link) => {
          return (
            <NavLink key={link.id} to={link.path}>
              <CardComponent
                containerSettings={CARD_CONTAINER_SETTINGS}
                iconSettings={{
                  icon: link.icon,
                  label: link.name,
                }}
              />
            </NavLink>
          );
        })}
      </section>

      {/* Pagination Controls */}
      <section className={styles.paginationConrols}>
        <IoIosArrowBack
          {...PAGINATION_ARROW_SETTINGS}
          onClick={() => handlePaginate('left')}
        />
        <IoIosArrowForward
          {...PAGINATION_ARROW_SETTINGS}
          onClick={() => handlePaginate('right')}
        />
      </section>
    </>
  );
};
