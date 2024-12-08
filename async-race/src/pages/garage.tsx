import React, { useState } from 'react';
import GarageMenu from '../componets/base/garage-menu/garage-menu';
import TrackBlock from '../componets/base/track-block/track-block';

const GaragePage: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <GarageMenu page={page} />
      <TrackBlock page={page} setPage={setPage} />
    </div>
  );
};

export default GaragePage;
