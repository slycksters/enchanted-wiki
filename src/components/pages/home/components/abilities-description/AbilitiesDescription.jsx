import { useState } from 'react';
import {
  GiFireRay,
  GiCardPick,
  GiDevilMask,
  GiLaurelsTrophy,
  GiMagicSwirl,
} from 'react-icons/gi';
import { FaHatWizard, FaShieldAlt } from 'react-icons/fa';
import { Image } from '@components';
  import styles from './AbilitiesDescription.module.css';
import { DESCRIPTIONS } from './descriptions.constant';

const BUTTONS = [
  { id: 1, icon: GiFireRay, name: 'Magic' },
  { id: 2, icon: GiDevilMask, name: 'Race' },
  { id: 3, icon: GiCardPick, name: 'Trait' },
  { id: 4, icon: GiMagicSwirl, name: 'Passive Magic' },
  { id: 5, icon: FaShieldAlt, name: 'Passive Skill' },
  { id: 6, icon: GiLaurelsTrophy, name: 'Title' },
];

export const AbilitiesDescription = () => {
  const [selected, setSelected] = useState(DESCRIPTIONS[0]);

  return (
    <main className={styles.description}>
      <div className="container">
        <div className="row row-gap-5 align-items-center">
          <div className={`col col-12 col-lg-6 ${styles.categoryItem}`}>
            <h1>
              <i>ABILITIES</i>
            </h1>
            <p>
              Abilities define your character's strengths, combat style, and
              progression. Each ability type contributes differently to how you
              fight and develop in the game.
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
                        setSelected(DESCRIPTIONS.find((d) => d.id === button.id))
                      }
                      style={{ color: isSelected ? 'var(--enchanted-color-khaki)' : null }}
                    >
                      <Icon />
                    </button>
                    <div className={styles.buttonText}>{button.name.toUpperCase()}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col col-12 col-lg-6">
            <div className={styles.categoryItem}>
              <div className={styles.categoryImage}>
                <Image
                  alt={'ability-description-image'}
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
