import styles from './Header.module.css';

export const Header = ({ info }) => {
  return (
    <div className={styles.header}>
      <section>
        <p className={styles.title}>{info.name}</p>
        <div className={styles.infoWrapper}>
          <table>
            <tbody>
              <tr className={styles.infoRow}>
                <td>Type:</td>
                <td>{info.type.name}</td>
              </tr>
              <tr className={styles.infoRow}>
                <td>Rarity:</td>
                <td>{info.rarity.name} {info.isGatcha ? `(${info.rarity.rate})` : ''}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.imageWrapper}>
        <img alt={info.name} src={info.attachment} />
      </section>
    </div>
  );
};
