import { cloneElement, useState } from 'react';
import { InfoPanelComponent, SidebarComponent } from '../..';
import styles from './Layout.module.css';
import { ControllerComponent } from '../controller/ControllerComponent';

const ChildComponent = ({ children, selectedCategory, setSelectedInfo }) => {
  return (
    <div className={styles.layoutContent}>
      {children &&
        cloneElement(children, {
          selectedCategory,
          setSelectedInfo,
        })}
    </div>
  );
};

export const LayoutComponent = ({ categories, children, defaultInfo }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.name || ''
  );
  const [selectedInfo, setSelectedInfo] = useState(defaultInfo);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  const handleSelectInfo = (info) => {
    setSelectedInfo(info);
    if (window.innerWidth <= 1024) {
      setShowInfoPanel(true);
    }
  };

  return (
    <div className={styles.layoutWrapper}>
      {/* Will appear below medium sized screens */}
      <ControllerComponent onClickHamburger={() => setShowSidebar(true)} />

      {/* Sidebar */}
      <SidebarComponent
        list={categories}
        onSelectItem={setSelectedCategory}
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />

      {/* Content */}
      <ChildComponent
        children={children}
        selectedCategory={selectedCategory}
        setSelectedInfo={handleSelectInfo}
      />

      {/* Info Panel */}
      <InfoPanelComponent
        info={selectedInfo}
        showInfoPanel={showInfoPanel}
        setShowInfoPanel={setShowInfoPanel}
      />
    </div>
  );
};
