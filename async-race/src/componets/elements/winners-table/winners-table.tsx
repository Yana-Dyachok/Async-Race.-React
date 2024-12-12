import React from 'react';
import { IWinnerCars } from '../../../types/interface';
import WinnerRow from './winners-row';
import styles from './winners-table.module.scss';

interface WinnerProps {
  winners: IWinnerCars[];
}

const WinnersTable: React.FC<WinnerProps> = ({ winners }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Number</th>
          <th className={styles.th}>Car</th>
          <th className={styles.th}>Name</th>
          <th className={styles.th}>Wins</th>
          <th className={styles.th}>Time (s)</th>
        </tr>
      </thead>
      <tbody>
        {winners.map((winner, index) => (
          <WinnerRow key={winner.id} winner={winner} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default WinnersTable;
