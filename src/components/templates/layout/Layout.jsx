import { cloneElement, useState } from 'react';
import styles from './Layout.module.css';
import { Controller, InfoPanel, Sidebar } from '../../organisms';
import { useWindowWidth } from '../../../hooks';
import { DATA } from '../../../mappers';

const Child = ({ children, info }) => {
  return (
    <div className={styles.layoutContent}>
      {children &&
        cloneElement(children, {
          info,
        })}
    </div>
  );
};

export const Layout = ({ categories, children, info }) => {
  const windowWidth = useWindowWidth();
  const isMobileOrTablet = windowWidth <= 1024;

  const [selectedInfo, setSelectedInfo] = useState(info);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(false);

  // --- handle click on sidebar's items
  const handleOnClickItem = (item) => {
    const foundInfo = DATA[item.type.name].find((data) => data.id === item.id);
    setSelectedInfo(foundInfo);
    if (isMobileOrTablet) setShowSidebar(false);
  };

  return (
    <div className={styles.layoutWrapper}>
      <Controller onClickHamburger={() => setShowSidebar(true)} />
      <Sidebar
        list={categories}
        onClickItem={handleOnClickItem}
        onClickSubItem={handleOnClickItem}
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
      <Child children={children} info={selectedInfo} />
      <InfoPanel
        showInfoPanel={showInfoPanel}
        setShowInfoPanel={setShowInfoPanel}
      />
    </div>
  );
};
