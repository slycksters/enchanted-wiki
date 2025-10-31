import styles from './Skill.module.css';

export const Skill = ({ info }) => {
  if (!info.abilities) return null;

  return (
    <section className={styles.abilities}>
      <h4>Ability Preview:</h4>
      <div className={'row row-cols-1 row-cols-md-2'}>
        {info.abilities.map((ability) => {
          return (
            <div
              className={styles.abilityItem}
              key={`info-ability-${ability.id}`}
            >
              <p>{ability.name}</p>
              <p dangerouslySetInnerHTML={{ __html: ability.description}} />
              <img alt={ability.name} src={ability.attachment} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
