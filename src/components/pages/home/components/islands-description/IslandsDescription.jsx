import { assets } from '@assets';
import { Image } from '@components';
import styles from './IslandsDescription.module.css';

export const IslandsDescription = () => {
  return (
    <main className={styles.description}>
      <div className={styles.categoryItem}>
        <h1>
          <i>ISLANDS</i>
        </h1>

        <p>
          Islands are areas where players can grind, explore, and face
          challenges. Each island has a corresponding level range, guiding
          players as they progress to higher-level islands.
        </p>

        <div className={'row row-gap-3'}>
          <div
            className={
              'col-12 col-lg-6 offset-lg-3 d-flex flex-column align-items-center gap-3'
            }
          >
            <Image
              alt={'explore-islands'}
              className={styles.imageShowcase}
              src={assets.introductions.islandsDescriptionGif2}
            />
            <p>Explore mysterious islands and uncover their hidden secrets.</p>
          </div>
          <div
            className={
              'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
            }
          >
            <Image
              alt={'face-powerful-bosses'}
              className={styles.imageShowcase}
              src={assets.introductions.islandsDescriptionGif1}
            />
            <p>Face powerful World Bosses and prove your strength.</p>
          </div>
          <div
            className={
              'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
            }
          >
            <Image
              alt={'discover-rare-specs'}
              className={styles.imageShowcase}
              src={assets.videos.specs.aizenV}
            />
            <p>Discover rare Specs and Weapons from formidable NPCs.</p>
          </div>
        </div>
      </div>
    </main>
  );
};
