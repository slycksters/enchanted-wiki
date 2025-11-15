import clsx from 'clsx';
import { assets } from '@assets';
import { Image } from '@components';
import styles from './WorldFeaturesDescription.module.css';

const SHOW_CASES = [
  {
    id: 1,
    alt: 'spawn-crystal',
    attachment: assets.images.islands.crescentIsle1,
    description: 'Save your way point.',
  },
  {
    id: 2,
    alt: 'mining-area',
    attachment: assets.images.worldFeatures.miningArea2,
    description: 'Gather valuable resources from mining areas.',
  },
  {
    id: 3,
    alt: 'dungeon-entrance',
    attachment: assets.images.islands.lostCave5,
    description: 'Raid dungeons to collect rare materials.',
    solo: true,
  },
  {
    id: 4,
    alt: 'shrine',
    attachment: assets.images.worldFeatures.shrine2,
    description: 'Activate all Shrines to summon Laxus Dreyar.',
  },
  {
    id: 5,
    alt: 'obelisk',
    attachment: assets.images.worldFeatures.obelisk1,
    description: 'Complete the Trial to face Sting Eucliffe.',
  },
];

export const WorldFeaturesDescription = () => {
  return (
    <main className={styles.description}>
      <div className={styles.categoryItem}>
        <h1>
          <i>WORLD FEATURES</i>
        </h1>

        <p>
          World Features are key locations that help players grow stronger and
          access advanced content. Each feature provides unique opportunities
          for combat, farming, or upgrading your abilities.
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
