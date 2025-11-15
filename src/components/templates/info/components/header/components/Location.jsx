import React from 'react';
import { NavLink } from 'react-router-dom';
import { getItemPath } from '@router/getItemPath.helper';
import styles from '../Header.module.css';

export const Location = ({ locations }) => {
  if (!locations?.length) return null;

  return (
    <div className={styles.infoRow}>
      <span className={styles.label}>{locations.length > 1 ? 'Locations' : 'Location'}:</span>
      <span className={styles.value}>
        {locations.map((location, index) => (
          // Use a React.Fragment to provide a key for each item in the loop
          <React.Fragment key={location.id}>
            <NavLink className={styles.navLink} to={getItemPath(location)}>
              {location.name}
            </NavLink>
            {/* Add a comma and space if it's not the last item in the array */}
            {index < locations.length - 1 && ', '}
          </React.Fragment>
        ))}
      </span>
    </div>
  );
};
