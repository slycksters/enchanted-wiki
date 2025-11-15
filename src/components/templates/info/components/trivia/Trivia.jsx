import styles from './Trivia.module.css';

export const Trivia = ({ info }) => {
  if (!info.trivia) return null;

  return (
    <section className={styles.trivia}>
      <div className={'row'}>
        <div className={'col col-12 col-md-12 col-lg-6'}>
          <h3>
            <i>Trivia</i>
          </h3>
          <ul>
            {info.trivia.map((text) => {
              return (
                <li key={text}>{text}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
