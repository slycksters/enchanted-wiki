import { formatDisplayName, formatNumberWithCommas, pluralize } from '@helpers';
import { Image } from '../../atoms/image';
import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { getItemPath } from '@router/getItemPath.helper';

export const Card = ({ data, style }) => {
  return (
    <NavLink to={getItemPath(data)}>
      <div className={styles.cardContainer} style={{ ...style }}>
        <div className={styles.imageWrapper}>
          <Image src={data.attachment} />
        </div>

        <div className={styles.detailSection}>
          <div className={styles.infoRow}>
            <div>Name:</div>
            <div>{data.name}</div>
          </div>
          <div className={styles.infoRow}>
            <div>Type:</div>
            <div>{data.subType?.name ?? data.type.name}</div>
          </div>
          {data.level && (
            <div className={styles.infoRow}>
              <div>Level:</div>
              <div>{formatNumberWithCommas(data.level)}</div>
            </div>
          )}
          {data.chance && (
            <div className={styles.infoRow}>
              <div>Chance:</div>
              <div>{data.chance}%</div>
            </div>
          )}
          {data.price && (
            <div className={styles.infoRow}>
              <div>Price:</div>
              <div>{formatNumberWithCommas(data.price)} Yen</div>
            </div>
          )}
          {data.stats &&
            Object.entries(data.stats).map((stat) => (
              <div className={styles.infoRow} key={stat}>
                <div>{formatDisplayName(stat[0])}:</div>
                <div>{formatNumberWithCommas(stat[1])}</div>
              </div>
            ))}
          {data.inhabitants && (
            <div className={styles.infoRow}>
              <div>Inhabitants Count:</div>
              <div>{data.inhabitants.filter(o => !o.isVaulted).length}</div>
            </div>
          )}
          <div className={styles.requirementRow} hidden={!data.requirements}>
            <div>Requirements:</div>
            <ul className={styles.requirementList}>
              {data.requirements?.map((r) => {
                const quantityRange = Array.isArray(r.quantity);
                return (
                  <li key={`card-item-requirements-${r.name}`}>
                    {quantityRange
                      ? r.quantity
                          .map((q) => formatNumberWithCommas(q))
                          .join('-')
                      : r.quantity && formatNumberWithCommas(r.quantity)}{' '}
                    {r.name !== 'Yen' && r.quantity
                      ? pluralize(r.name, r.quantity)
                      : r.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
