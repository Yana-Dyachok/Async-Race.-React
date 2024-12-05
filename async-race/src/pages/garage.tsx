import React from 'react';
import GarageMenu from '../componets/base/garage-menu/garage-menu';
import TrackBlock from '../componets/base/track-block/track-block';

const GaragePage: React.FC = () => {
  return (
    <div>
      <GarageMenu />
      <TrackBlock />
    </div>
  );
};

export default GaragePage;
