import { Description, Drops, Header, Skill, Source } from './components';
import styles from './Info.module.css';

export const Info = ({ info }) => {
  if (!info) return null;

  return (
    <div className={styles.info}>
      <Header info={info} />
      <Description info={info} />
      <div className={'row row-cols-1 row-cols-lg-2'}>
        <Drops info={info} />
        <Source info={info} />
      </div>
      <Skill info={info} />
    </div>
  );
};
