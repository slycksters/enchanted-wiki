import { assets } from '@assets';
import { Image } from '@components';
import styles from './WorldFeaturesDescription.module.css';

export const WorldFeaturesDescription = () => {
  return (
    <main className={styles.description}>
      <div className={'container'}>
        <div className={styles.categoryItem}>
          <h1>
            <i>WORLD FEATURES</i>
          </h1>

          <p>
            World Features are key locations that help players grow stronger and
            access advanced content. Each feature provides unique opportunities
            for combat, farming, or upgrading your abilities.
          </p>

          <div className={'row row-gap-3'}>
            <div
              className={
                'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
              }
            >
              <Image
                alt={'spawn-crystal'}
                className={styles.imageShowcase}
                src={assets.images.islands.crescentIsle1}
              />
              <p>Save your way point.</p>
            </div>
            <div
              className={
                'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
              }
            >
              <Image
                alt={'mining-area'}
                className={styles.imageShowcase}
                src={assets.images.worldFeatures.miningArea2}
              />
              <p>Gather valuable resources from mining areas.</p>
            </div>
            <div
              className={
                'col-12 col-lg-6 offset-lg-3 d-flex flex-column align-items-center gap-3'
              }
            >
              <Image
                alt={'shrine'}
                className={styles.imageShowcase}
                src={assets.images.worldFeatures.shrine2}
              />
              <p>Activate all Shrines to summon Laxus Dreyar.</p>
            </div>
            <div
              className={
                'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
              }
            >
              <Image
                alt={'obelisk'}
                className={styles.imageShowcase}
                src={assets.images.worldFeatures.obelisk1}
              />
              <p>Complete the Trial to face Sting Eucliffe.</p>
            </div>
            <div
              className={
                'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
              }
            >
              <Image
                alt={'dungeon-entrance'}
                className={styles.imageShowcase}
                src={assets.images.islands.lostCave5}
              />
              <p>Raid dungeons to collect rare materials.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

{
  /* <main className={styles.description}>
      <div className={styles.categoryItem}>
        <h1>
          <i>World Features</i>
        </h1>

        <p>
          World Features are key locations that help players grow stronger and
          access advanced content. Each feature provides unique opportunities
          for combat, farming, or upgrading your abilities.
        </p>

        <div className={'row row-gap-3'}>
          <div
            className={
              'col-12 col-lg-6 offset-lg-3 d-flex flex-column align-items-center gap-3'
            }
          >
            <Image
              alt={'spawn-crystal'}
              className={styles.imageShowcase}
              src={assets.images.islands.crescentIsle1}
            />
            <p>Save your way point</p>
          </div>
          <div
            className={
              'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
            }
          >
            <Image
              alt={'mining-area'}
              className={styles.imageShowcase}
              src={assets.images.worldFeatures.miningArea2}
            />
            <p>Gather valuable resources from mining areas</p>
          </div>
          <div
            className={
              'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
            }
          >
            <Image
              alt={'shrine'}
              className={styles.imageShowcase}
              src={assets.images.worldFeatures.shrine1}
            />
            <p>Activate all Shrines to summon Laxus Dreyar</p>
          </div>
          <div
            className={
              'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
            }
          >
            <Image
              alt={'obelisk'}
              className={styles.imageShowcase}
              src={assets.images.worldFeatures.obelisk1}
            />
            <p>Complete the Trial to face Sting Eucliffe</p>
          </div>
          <div
            className={
              'col-12 col-lg-6 d-flex flex-column align-items-center gap-3'
            }
          >
            <Image
              alt={'dungeon-entrance'}
              className={styles.imageShowcase}
              src={assets.images.islands.lostCave5}
            />
            <p>Raid dungeons to collect rare materials</p>
          </div>
        </div>
      </div>
    </main> */
}
