import styles from './Avatar.module.css';
import { zazelAvatarImg, zazelAvatarVid } from '../../../../assets';

export const AvatarComponent = () => {
  return (
    <section className={styles.avatarDisplay}>
      {/* <img alt="roblox-avatar" src={zazelAvatarImg} /> */}
        <video
        className={styles.avatarVideo}
        src={zazelAvatarVid}
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