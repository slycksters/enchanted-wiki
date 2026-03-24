import { useState } from 'react';
import { Image } from '@components';
import styles from './CharacterBuilder.module.css';
import { BaseStat, StatInput, StatOutput } from './components';
import { SelectionModal } from '../selection-modal';
import { CATEGORIES } from '../../constants';

export const CharacterBuilder = () => {
  // Convert the CATEGORIES object into an array for mapping
  const sections = Object.values(CATEGORIES);

  const [characterData, setCharacterData] = useState({
    combatStyle: {},
    race: {},
    trait: {},
  });
  const [allocatedStatPoints, setAllocatedStatPoints] = useState({
    blade: '',
    melee: '',
    magic: '',
    defense: '',
    soulStack: '',
  });

  const [activeSection, setActiveSection] = useState(null);

  const handleDataUpdate = (data) => {
    setCharacterData((prev) => ({
      ...prev,
      [activeSection.id]: data,
    }));
  };

  const handleSetAllocation = (e) => {
    let { name, value } = e.target;
    const maxSoulStack = 100;
    const maxStatPoint = 16000;

    if (name === 'soulStack' && value > maxSoulStack) value = maxSoulStack;
    else if (value > maxStatPoint) value = maxStatPoint;

    setAllocatedStatPoints((prevState) => ({
      ...prevState,
      [name]: Number(value) || '',
    }));
  };

  return (
    <div className={styles.characterBuilder}>
      {/* --- Section 1: Buttons --- */}
      <section className={styles.selectorSection}>
        {sections.map((section) => {
          const currentData = characterData[section.id];

          return (
            <div key={section.id} className={styles.selectorWrapper}>
              <button
                className={styles.selector}
                onClick={() => setActiveSection(section)}
              >
                {currentData.attachment ? (
                  <Image alt={currentData.name} src={currentData.attachment} />
                ) : (
                  <>Select {section.label}</>
                )}
              </button>
            </div>
          );
        })}
      </section>

      {/* --- Section 2: Stats Display --- */}
      <BaseStat characterData={characterData} sections={sections} />

      {/* --- Section 3: Stat Inputs --- */}
      <StatInput
        allocation={allocatedStatPoints}
        setAllocation={handleSetAllocation}
      />

      {/* --- Section 4: Stat Outputs --- */}
      <StatOutput
        allocatedStatPoints={allocatedStatPoints}
        characterData={characterData}
      />

      {/* --- Last Section: Modal --- */}
      {activeSection && (
        <SelectionModal
          selectedCategory={activeSection}
          onHide={() => setActiveSection(null)}
          onSelectData={handleDataUpdate}
        />
      )}
    </div>
  );
};
