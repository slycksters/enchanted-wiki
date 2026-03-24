import { MetaData } from '@components';
import { META_DATA_CONFIG } from './constants';
import { CharacterBuilder } from './components';
import styles from './StatBuilder.module.css';

export const StatBuilderPage = () => {
  return (
    <div className={styles.statBuilder}>
      <MetaData info={META_DATA_CONFIG} />

      <p className={'position-absolute'}>This Page is not finished.</p>
      <h1>Stat Builder</h1>
      <div className={'row'}>
        <div className={'col col-12 col-lg-4 col-sm-8 offset-lg-4 offset-sm-2'}>
          <CharacterBuilder />
        </div>
      </div>
    </div>
  );
};