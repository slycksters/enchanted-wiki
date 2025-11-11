import { Image } from '@components';
import styles from './Table.module.css';
import { formatNumberWithCommas, pluralize } from '@helpers';

export const Table = ({ list }) => {
  return (
    <div className={'overflow-x-auto'}>
      <table className={styles.table}>
      <thead>
        <tr className={styles.tableHeader}>
          <th></th>
          <th>Name</th>
          <th>Type</th>
          {list.some((item) => item.chance) && <th>Chance</th>}
          {list.some((w) => w.requirements?.length > 0) && (
            <th>Requirements</th>
          )}
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr
              key={`table-row-${item.type?.name}-${item.name}-${item.id}`}
              className={styles.tableRow}
            >
              <td>
                <Image alt={item.name} src={item.attachment} />
              </td>
              <td>{item.name}</td>
              <td>{item.subType ? item.subType.name : item.type.name}</td>
              {item.chance && <td>{item.chance}%</td>}
              {item.requirements?.length > 0 && (
                <td className={'text-start'}>
                  <ul>
                    {item.requirements.map((r) => {
                      const quantityRange = Array.isArray(r.quantity);
                      return (
                        <li key={`table-item-requirements-${r.name}`}>
                          {quantityRange
                            ? r.quantity
                                .map((q) => formatNumberWithCommas(q))
                                .join('-')
                            : r.quantity &&
                              formatNumberWithCommas(r.quantity)}{' '}
                          {r.name !== 'Yen' && r.quantity
                            ? pluralize(r.name, r.quantity)
                            : r.name}
                        </li>
                      );
                    })}
                  </ul>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};
