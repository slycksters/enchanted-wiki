import styles from '../../Home.module.css';

export const WorldFeaturesDescription = () => {
  return (
    <main className={styles.description}>
      <div className={styles.category}>
        <h3>World Features</h3>

        <p>
          World Features are key locations that help players grow stronger and
          access advanced content. Each feature provides unique opportunities
          for combat, farming, or upgrading your abilities.
        </p>

        <ul>
          <li>
            <span>Spawn Crystal</span> - The location where players spawn when
            joining the game or after dying.
          </li>
          <li>
            <span>Mining</span> - An AFK farming area where players can collect
            materials, Race reroll or Passive Magic reroll and find chests.
          </li>
          <li>
            <span>Shrine</span> - A trial where players summon Laxus Dreyar and
            complete his quest to upgrade Lightning Dragon Slayer to Lightning
            Dragon Slayer V2.
          </li>
          <li>
            <span>Obelisk</span> - A trial where players summon Sting Eucliffe
            and complete his quest to upgrade Shadow Dragon Slayer to Shadow
            Dragon Slayer V2.
          </li>
          <li>
            <span>Dungeon</span> - Contains world bosses that drop materials
            used to craft or upgrade strong Specs.
          </li>
        </ul>
      </div>
    </main>
  );
};
