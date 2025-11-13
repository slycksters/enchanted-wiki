import { useState } from 'react';
import { GiRing, GiOpenTreasureChest, GiMetalBar } from 'react-icons/gi';
import { Image } from '@components';
import { DESCRIPTIONS } from './descriptions.constant';
import styles from './ItemsDescription.module.css';

const BUTTONS = [
  { id: 1, icon: GiRing, name: 'Accessories' },
  { id: 2, icon: GiOpenTreasureChest, name: 'Artifacts' },
  { id: 3, icon: GiMetalBar, name: 'Materials' },
];

export const ItemsDescription = () => {
  const [selected, setSelected] = useState(DESCRIPTIONS[0]);

  return (
    <main className={styles.description}>
      <div className="container">
        <div className="row row-gap-5 align-items-center">
          <div className={`col col-12 col-lg-6 ${styles.categoryItem}`}>
            <h1>
              <i>ITEMS</i>
            </h1>
            <p>
              Items are essential for progression, providing stat boosts,
              utility functions, and materials for crafting and upgrades. There
              are three main categories, each serving a unique purpose.
            </p>

            <div className={styles.buttonGroup}>
              {BUTTONS.map((button) => {
                const Icon = button.icon;
                const isSelected = selected.id === button.id;
                return (
                  <div key={button.id} className={styles.buttonWrapper}>
                    <button
                      className={styles.button}
                      onClick={() =>
                        setSelected(
                          DESCRIPTIONS.find((d) => d.id === button.id)
                        )
                      }
                      style={{
                        color: isSelected
                          ? 'var(--enchanted-color-silver)'
                          : null,
                      }}
                    >
                      <Icon />
                    </button>
                    <div className={styles.buttonText}>
                      {button.name.toUpperCase()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col col-12 col-lg-6">
            <div className={styles.categoryItem}>
              <div className={styles.categoryImage}>
                <Image
                  alt="ability-description-image"
                  src={selected.image}
                  style={{ height: selected.id === 6 ? '50%' : undefined }}
                />
              </div>
              <div className={styles.categoryDescription}>
                <h3>
                  <i>{selected.name.toUpperCase()}</i>
                </h3>
                <p>{selected.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
