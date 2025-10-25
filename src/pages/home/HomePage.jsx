import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { GoDot, GoDotFill } from 'react-icons/go';
import styles from './Home.module.css';
import { enchantedLogo } from '../../assets';
import { CardComponent } from '../../components/ui';
import { cards } from '../../data';
import { useState } from 'react';

// --- CONSTANTS
const CONTAINER_SETTINGS = { height: '200px', width: '100%' };
const PAGINATION_ARROW_SETTINGS = { cursor: 'pointer', size: 40 };
const PAGE_SIZE = 5;

// --- COMPONENT
export const HomePage = () => {
  const [startIndex, setStartIndex] = useState(1);
  const endIndex = startIndex + PAGE_SIZE;

  const handlePaginate = (direction) => {
    if (direction === 'left' && startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
    if (direction === 'right' && startIndex < cards.length - PAGE_SIZE) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.homePageContainer}>
      {/* Logo */}
      <section className={styles.imageWrapper}>
        <img src={enchantedLogo} alt={'enchanted-logo'} />
      </section>

      {/* Developer Name */}
      <section className={styles.developerName}>
        <small>Developed by: Slyckster AKA Zazel</small>
      </section>

      {/* Game Description */}
      <section className={styles.description}>
        <p>
          Step into the archives of Enchanted, where magic and adventure
          intertwine. Discover the secrets behind every spell, item, and legend
          that shapes this mystical world.
        </p>
      </section>

      {/* Navigation Cards */}
      <section className={`${styles.navigationCards} grid grid-cols-5`}>
        {/* Card List */}
        {/* displays 5 cards at a time, need to decrement to 1 as slice is index-based */}
        {cards.slice(startIndex, endIndex).map((card) => {
          return (
            <CardComponent
              key={card.id}
              containerSettings={CONTAINER_SETTINGS}
              iconSettings={{
                icon: card.icon,
                label: card.label,
              }}
            />
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
    </div>
  );
};
