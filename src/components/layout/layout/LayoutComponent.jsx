import { cloneElement, useState } from 'react';
import styles from './Layout.module.css';
import { ControllerComponent } from '../controller/ControllerComponent';
import { InfoPanelComponent, SidebarComponent } from '../..';

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
  const isMobileOrTablet = window.innerWidth <= 1024;
  const [selectedInfo, setSelectedInfo] = useState(defaultInfo);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  // --- handle click on sidebar's items
  const handleScrollToSection = (item) => {
    const section = document.getElementById(
      `${item.type.name}-${item.id}-${item.name}`
    );
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (isMobileOrTablet) setShowSidebar(false);
  };

  // --- handle click on child component's cards
  const handleSelectInfo = (info) => {
    setSelectedInfo(info);
    if (isMobileOrTablet) {
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
        onSelectItem={handleScrollToSection}
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />

      {/* Content */}
      <ChildComponent children={children} setSelectedInfo={handleSelectInfo} />

      {/* Info Panel */}
      <InfoPanelComponent
        info={selectedInfo}
        showInfoPanel={showInfoPanel}
        setShowInfoPanel={setShowInfoPanel}
      />
    </div>
  );
};
