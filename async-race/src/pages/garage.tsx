import React from 'react';
import GarageMenu from '../componets/base/garage-menu/garage-menu';
import TrackBlock from '../componets/base/track-block/track-block';
import { CarProvider } from '../utils/car-context';

const GaragePage: React.FC = () => {
  return (
    <CarProvider>
      <div>
        <GarageMenu />
        <TrackBlock />
      </div>
    </CarProvider>
  );
};

export default GaragePage;
