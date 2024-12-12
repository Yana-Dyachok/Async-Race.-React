import React from 'react';
import { IWinnerCars } from '../../../types/interface';
import CarSVG from '../../ui/create-car-svg/create-car-svg';
import styles from './winners-table.module.scss';

interface WinnerRowProps {
  winner: IWinnerCars;
  index: number;
}

const WinnerRow: React.FC<WinnerRowProps> = ({ winner, index }) => {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{index + 1}</td>
      <td className={styles.td}>
        <div>
          {' '}
          <CarSVG car={winner.car} sizes={{ width: '60px', height: '30px' }} />
        </div>
      </td>
      <td className={styles.td}>{winner.car.name}</td>
      <td className={styles.td}>{winner.wins}</td>
      <td className={styles.td}>{parseFloat(winner.time.toFixed(2))}</td>
    </tr>
  );
};

export default WinnerRow;
