import {
  ImageComponent,
  InformationComponent,
  SourceComponent,
} from './components';
import styles from './InfoPanel.module.css';

export const InfoPanelComponent = ({
  info,
  showInfoPanel,
  setShowInfoPanel,
}) => {
  if (!info) return <div></div>;

  return (
    <>
      {/* Overlay (for small screens only when open) */}
      {showInfoPanel && (
        <div
          className={styles.overlay}
          onClick={() => setShowInfoPanel(false)}
        ></div>
      )}

      <div
        className={`${styles.infoPanelWrapper} ${
          showInfoPanel ? styles.infoPanelOpen : styles.infoPanelClosed
        }`}
      >
        {/* Attachment */}
        <ImageComponent info={info} />

        {/* Main Informations */}
        <InformationComponent info={info} />

        {/* Source informations */}
        <SourceComponent info={info} />
      </div>
    </>
  );
};
