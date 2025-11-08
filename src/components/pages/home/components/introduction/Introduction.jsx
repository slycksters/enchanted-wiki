import styles from './Introduction.module.css';

export const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <p>
        <span>Enchanted</span> or now known as <span>Enchanted Piece</span> is a
        bandit-beater game set in a world of magic and adventure, inspired by
        Fairy Tail, GPO, Project Slayers, and other anime-style titles.
      </p>

      <p>
        Players can explore different areas, fight enemies, and master various
        magic abilities as they progress through the game. The combat focuses on
        action and timing, offering a mix of melee and magic-based fighting
        styles.
      </p>

      <p>
        It's a Fairy Tail-inspired experience built around fast-paced battles,
        character growth, and an open world filled with opportunities to train
        and improve your skills.
      </p>
    </div>
  );
};
