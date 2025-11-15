import styles from './Overview.module.css';

export const Overview = ({ title, intro, sections }) => {
  return (
    <div className={styles.overview}>
      {/* Overview Section */}
      <section>
        <h1 className={styles.title}>
          <i>{title}</i>
        </h1>

        <div className={styles.headerSection}>
          <div className={'row'}>
            <div className={'col col-12 col-lg-6'}>
              {intro.map((p, i) => (
                <p key={`intro-${i}`}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <section className={styles.section} key={`section-${index}`}>
          <h3>
            <i>{section.title}</i>
          </h3>

          <div className={'row'}>
            <div className={'col col-12 col-lg-6'}>
              {/* Descriptions */}
              {section.description?.map((p, i) => (
                <p key={`desc-${i}`}>{p}</p>
              ))}

              {/* Notes */}
              {section.notes && (
                <>
                  <label>Note{section.notes.length > 1 ? 's' : ''}:</label>
                  <ul>
                    {section.notes.map((note, i) => (
                      <li key={`note-${i}`}>{note}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Simple lists */}
              {section.label && (
                <>
                  <label>{section.label}</label>
                  <ul>
                    {section.listItems.map((item, i) => (
                      <li key={`listItem-${i}`}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Label groups (nested lists) */}
              {section.labelGroups && (
                <>
                  {section.labelGroups.map((group, i) => (
                    <div key={`group-${i}`}>
                      <label>{group.label}</label>
                      <ul>
                        {group.items.map((item, j) => (
                          <li key={`groupItem-${j}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}

              {/* Optional footer */}
              {section.footer && <p>{section.footer}</p>}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
