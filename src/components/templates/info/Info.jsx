import { Description, Drops, Header, Skill, Source } from './components';
import { Gallery } from './components/gallery';
import styles from './Info.module.css';

export const Info = ({ info }) => {
  if (!info) return null;

  return (
    <div className={styles.info}>
      <Header info={info} />
      <Description info={info} />
      <div className={'row'}>
        <Drops info={info} />
        <Source info={info} />
      </div>
      <Gallery info={info} />
      <Skill info={info} />
    </div>
  );
};
