import { Image } from '@components';
import styles from './Table.module.css';

export const Table = ({ list }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHeader}>
          <th></th>
          <th>Name</th>
          <th>Type</th>
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
              <td>{item.type.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
