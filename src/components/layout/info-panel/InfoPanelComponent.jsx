import { ImageComponent, InformationComponent, SourceComponent } from './components';
import styles from './InfoPanel.module.css';

export const InfoPanelComponent = ({ info }) => {
  if (!info) return <div></div>;

  return (
    <div className={styles.infoPanelWrapper}>
      <ImageComponent info={info} />
      <InformationComponent info={info} />

      {/* Source informations */}
      <SourceComponent info={info} />
    </div>
  )
};