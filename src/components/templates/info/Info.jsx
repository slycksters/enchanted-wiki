import {
  Description,
  Drops,
  Gallery,
  Header,
  Skill,
  Source,
  Ware,
} from './components';
import styles from './Info.module.css';

export const Info = ({ info }) => {
  if (!info) return null;

  return (
    <div className={styles.info}>
      <Header info={info} />
      <Description info={info} />
      <Source info={info} />
      <Drops info={info} />
      <Ware info={info} />
      <Gallery info={info} />
      <Skill info={info} />
    </div>
  );
};
