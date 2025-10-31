import { assets } from '@assets';
import { Image } from '@components';
import styles from './Avatar.module.css';

export const Avatar = () => {
  return (
    <section className={styles.avatarDisplay}>
      {/* <Image alt="roblox-avatar" src={assets.images.robloxAvatar.zazel} /> */}
        <video
        className={styles.avatarVideo}
        src={assets.videos.zazelFloating()}
        autoPlay
        loop
        muted
        playsInline
        preload={'auto'}
      />
      <div className={styles.avatarShadow}></div>
    </section>
  )
};