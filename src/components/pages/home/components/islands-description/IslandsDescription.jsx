import clsx from 'clsx';
import { assets } from '@assets';
import { Image } from '@components';
import styles from './IslandsDescription.module.css';

const SHOW_CASES = [
  {
    id: 1,
    alt: 'explore islands',
    attachment: assets.introductions.islandsDescriptionGif2,
    description: 'Explore mysterious islands and uncover their hidden secrets.',
    solo: true,
  },
  {
    id: 2,
    alt: 'face powerful bosses',
    attachment: assets.introductions.islandsDescriptionGif1,
    description: 'Face powerful World Bosses and prove your strength.',
  },
  {
    id: 3,
    alt: 'discover rare specs',
    attachment: assets.videos.specs.aizenV,
    description: 'Discover rare Specs and Weapons from formidable NPCs.',
  },
];

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

        <div className={'container'}>
          <div className={'row row-gap-3'}>
            {SHOW_CASES.map((item) => {
              return (
                <div
                  className={clsx(
                    'col-12 col-lg-6 d-flex flex-column align-items-center gap-3',
                    item.solo ? 'offset-lg-3' : null
                  )}
                  key={`world-feature-show-case-${item.id}-${item.description}`}
                >
                  <Image
                    alt={item.alt}
                    className={styles.imageShowcase}
                    src={item.attachment}
                  />
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
