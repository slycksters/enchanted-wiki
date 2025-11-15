import {
  Description,
  Drops,
  Gallery,
  Header,
  Skill,
  Sources,
  Ware,
} from './components';
import { Inhabitants } from './components/inhabitants';
import styles from './Info.module.css';

export const Info = ({ info }) => {
  if (!info) return null;

  return (
    <div className={styles.info}>
      <Header info={info} />
      <Description info={info} />
      <Sources info={info} />
      <Drops info={info} />
      <Ware info={info} />
      <Inhabitants info={info} />
      <Gallery info={info} />
      <Skill info={info} />
    </div>
  );
};
