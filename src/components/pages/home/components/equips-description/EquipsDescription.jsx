import { useState } from 'react';
import { GiAxeSword, GiAngelWings } from 'react-icons/gi';
import clsx from 'clsx';
import { Image } from '@components';
import { DESCRIPTIONS } from './descriptions.constant';
import styles from './EquipsDescription.module.css';

const BUTTONS = [
  { id: 1, icon: GiAxeSword, name: 'Weapon' },
  { id: 2, icon: GiAngelWings, name: 'Spec' },
];

export const EquipsDescription = () => {
  const [selected, setSelected] = useState(DESCRIPTIONS[0]);

  return (
    <main className={styles.description}>
      <div className="container">
        <div className="row row-gap-5 align-items-center">
          <div
            className={`col col-12 col-lg-6 ${styles.categoryItem} order-1 order-lg-2`}
          >
            <h1>
              <i>EQUIPS</i>
            </h1>
            <p>
              Equips enhance your combat capabilities by providing powerful
              tools and special character abilities. Equips focus on two of the
              three main combat styles and allow you to customize your fighting
              strategy.
            </p>

            <div className={'row w-100'}>
              {BUTTONS.map((button, index) => {
                const Icon = button.icon;
                const isSelected = selected.id === button.id;
                const enableOffset = index === 0;

                return (
                  <div
                    key={button.id}
                    className={clsx(
                      styles.buttonWrapper,
                      'col col-6 col-lg-3',
                      enableOffset ? 'offset-lg-3' : ''
                    )}
                  >
                    <button
                      className={styles.button}
                      onClick={() =>
                        setSelected(
                          DESCRIPTIONS.find((d) => d.id === button.id)
                        )
                      }
                      style={{
                        color: isSelected
                          ? 'var(--enchanted-color-sky-blue)'
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

          <div className="col col-12 col-lg-6 order-2 order-lg-1">
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
