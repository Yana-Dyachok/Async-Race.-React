import React from 'react';
import { IWinnerCars } from '../../../types/interface';

interface WinnerProps {
  winner: IWinnerCars;
}

const WinnersTable: React.FC<WinnerProps> = ({ winner }) => {
  return <div>{winner.car.name}</div>;
};

export default WinnersTable;
