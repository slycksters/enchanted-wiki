import { useState } from 'react';
import clsx from 'clsx';
import { Card } from '@components';
import { MetaData } from '@components/MetaData';
import { useWindowWidth } from '@hooks';
import styles from './Overview.module.css';

export const Overview = ({ header, sections }) => {
  const headerTitle = header.title.replace(' Overview', '');

  // 1. Get screen width and determine if we're on a mobile/tablet view
  const windowWidth = useWindowWidth();
  const isMobileOrTablet = windowWidth <= 1024;

  // 2. State to manage which accordion sections are open
  // We use an object to track each section independently by its title
  const [openSections, setOpenSections] = useState({});

  // 3. Handler to toggle the open state of a specific section
  const handleToggleSection = (title) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [title]: !prevOpenSections[title], // Toggle the boolean value for the given title
    }));
  };

  return (
    <div className={styles.overview}>
      <MetaData
        info={{ name: headerTitle, description: header.intro }}
      />

      <section>
        <h1 className={styles.title}>
          <i>{header.title}</i>
        </h1>
        <div className={styles.headerSection}>
          <div className={'row'}>
            <div className={'col col-12 col-lg-6'}>
              {header.intro.map((p, i) => (
                <p key={`intro-${i}`}>{p}</p>
              ))}
            </div>
            {header.list && (
              <div className={'col col-12'}>
                <label>List of {headerTitle}:</label>
                <div className={'d-flex flex-wrap gap-2 mt-3'}>
                  {header.list.map((item) => (
                    <Card
                      key={item.id}
                      data={item}
                      style={{ height: '100%' }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section, index) => {
        // Check if the current section is open
        const isOpen = !!openSections[section.title];

        return (
          <section className={styles.section} key={`section-${index}`}>
            <h3>
              <i>{section.title}</i>
            </h3>
            <div className={'row'}>
              <div className={'col col-12 col-lg-6'}>
                {/* Descriptions, notes, etc. (no changes here) */}
                {section.description?.map((p, i) => (
                  <p key={`desc-${i}`}>{p}</p>
                ))}
                {section.notes && (
                  <>
                    {' '}
                    <label>
                      Note{section.notes.length > 1 ? 's' : ''}:
                    </label>{' '}
                    <ul>
                      {' '}
                      {section.notes.map((note, i) => (
                        <li key={`note-${i}`}>{note}</li>
                      ))}{' '}
                    </ul>{' '}
                  </>
                )}
                {section.label && (
                  <>
                    {' '}
                    <label>{section.label}</label>{' '}
                    <ul>
                      {' '}
                      {section.listItems.map((item, i) => (
                        <li key={`listItem-${i}`}>{item}</li>
                      ))}{' '}
                    </ul>{' '}
                  </>
                )}
                {section.labelGroups && (
                  <>
                    {' '}
                    {section.labelGroups.map((group, i) => (
                      <div key={`group-${i}`}>
                        {' '}
                        <label>{group.label}</label>{' '}
                        <ul>
                          {' '}
                          {group.items.map((item, j) => (
                            <li key={`groupItem-${j}`}>{item}</li>
                          ))}{' '}
                        </ul>{' '}
                      </div>
                    ))}{' '}
                  </>
                )}
                {section.footer && <p>{section.footer}</p>}
              </div>

              {/* === ACCORDION LOGIC START === */}
              {section.list && (
                <div className={'col col-12'}>
                  {isMobileOrTablet ? (
                    // 4. Mobile/Tablet View: Render the clickable accordion header
                    <>
                      <label
                        className={styles.accordionHeader}
                        onClick={() => handleToggleSection(section.title)}
                      >
                        {isOpen ? 'Hide' : 'Show'} List of {section.title}
                      </label>
                      <div
                        className={clsx(styles.accordionContent, {
                          [styles.open]: isOpen,
                        })}
                      >
                        {/* Wrapper div is important for the grid animation to work correctly */}
                        <div
                          className={clsx(
                            'd-flex flex-wrap gap-2',
                            isOpen ? styles.marginTop : styles.noMarginTop
                          )}
                        >
                          {section.list.map((item) => (
                            <Card
                              key={item.id}
                              data={item}
                              style={{ height: '100%' }}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // 5. Desktop View: Render the static, always-visible list
                    <>
                      <label>List of {section.title}:</label>
                      <div className={'d-flex flex-wrap gap-2 mt-3'}>
                        {section.list.map((item) => (
                          <Card
                            key={item.id}
                            data={item}
                            style={{ height: '100%' }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
              {/* === ACCORDION LOGIC END === */}
            </div>
          </section>
        );
      })}
    </div>
  );
};
