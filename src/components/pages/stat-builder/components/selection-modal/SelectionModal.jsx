import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import clsx from 'clsx';
import { Image } from '@components';
import styles from './SelectionModal.module.css';

export const SelectionModal = (props) => {
  const { onHide, onSelectData, selectedCategory } = props;
  const isMultipleCategories = selectedCategory.list.length > 1;
  const [selectedTab, setSelectedTab] = useState(selectedCategory.list[0]);

  const handleSelectTab = (selectedData) => {
    setSelectedTab(selectedData);
  };

  const handleSelectData = (selectedData) => {
    onSelectData(selectedData);
    onHide();
  };

  const renderTabButtons = () => {
    if (isMultipleCategories) {
      return selectedCategory.list.map((tab) => {
        return (
          <button
            key={tab.id}
            className={clsx(styles.tabButton, {
              [styles.activeTabButton]: selectedTab.label === tab.label,
            })}
            onClick={() => handleSelectTab(tab)}
          >
            {tab.label}
          </button>
        );
      });
    }

    return null;
  };

  const renderSelectionButtons = () => {
    if (selectedTab && selectedTab.list) {
      return selectedTab.list.map((button) => {
        const isLongText = button.name.length > 16;

        return (
          <button
            key={button.id}
            className={styles.selectionButton}
            onClick={() => handleSelectData(button)}
          >
            <Image alt={button.name} src={button.attachment} />
            <label className={clsx({ [styles.smallLabel]: isLongText })}>
              {button.name}
            </label>
          </button>
        );
      });
    }

    return <div className={styles.verbiage}>No items to display</div>;
  };

  return (
    <Modal
      backdropClassName={styles.backdrop}
      dialogClassName={styles.selectionDialog}
      onHide={onHide}
      show={true}
      size={'lg'}
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <Modal.Header className={styles.header}>
        Select {selectedCategory.label}
        <button className={styles.escButton} onClick={onHide} type={'button'}>
          esc
        </button>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div className={styles.tabButtonWrapper}>{renderTabButtons()}</div>
        <div
          className={clsx(styles.selectionButtonWrapper, {
            [styles.withBorderTop]: !isMultipleCategories,
          })}
        >
          {renderSelectionButtons()}
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.footer}>reign-studios</Modal.Footer>
    </Modal>
  );
};
