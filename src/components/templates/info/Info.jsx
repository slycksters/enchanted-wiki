import { MetaData } from '@components/MetaData';
import {
  Description,
  Drops,
  Gallery,
  Header,
  Inhabitants,
  Related,
  Skill,
  Sources,
  Trivia,
  Ware,
} from './components';
import styles from './Info.module.css';

export const Info = ({ pageOverview: PageOverview, info }) => {
  return (
    <div className={styles.info}>
      {info ? (
        <>
          <MetaData info={info} />

          {/* Page content */}
          <Header info={info} />

          <Description info={info} />
          <Trivia info={info} />
          <Sources info={info} />
          <Drops info={info} />
          <Ware info={info} />
          <Inhabitants info={info} />
          <Related info={info} />

          <Gallery info={info} />

          <Skill info={info} />
        </>
      ) : (
        <PageOverview />
      )}
    </div>
  );
};
