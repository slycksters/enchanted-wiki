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
import { MetaData } from '@components/MetaData';

export const Info = ({ info }) => {
  if (!info) return null;

  return (
    <div className={styles.info}>
      <MetaData info={info} />

      {/* Page content */}
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
