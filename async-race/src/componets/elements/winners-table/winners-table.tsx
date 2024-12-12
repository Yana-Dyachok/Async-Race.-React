import React from 'react';
import { IWinnerCars } from '../../../types/interface';
import WinnerRow from './winners-row';
import styles from './winners-table.module.scss';

interface WinnerProps {
  winners: IWinnerCars[];
  sortWinsASC: () => void;
  sortWinsDESC: () => void;
  sortTimeASC: () => void;
  sortTimeDESC: () => void;
}

const WinnersTable: React.FC<WinnerProps> = ({
  winners,
  sortWinsASC,
  sortWinsDESC,
  sortTimeASC,
  sortTimeDESC,
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Number</th>
          <th className={styles.th}>Car</th>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>
            <p>Wins</p>
            <button className={styles.buttonUp} onClick={sortWinsASC}></button>
            <button
              className={styles.buttonDown}
              onClick={sortWinsDESC}
            ></button>
          </th>
          <th className={styles.th}>
            <p>Time (s)</p>
            <button className={styles.buttonUp} onClick={sortTimeASC}></button>
            <button
              className={styles.buttonDown}
              onClick={sortTimeDESC}
            ></button>
          </th>
        </tr>
      </thead>
      <tbody>
        {winners.map((winner) => (
          <WinnerRow key={winner.id} winner={winner} />
        ))}
      </tbody>
    </table>
  );
};

export default WinnersTable;
