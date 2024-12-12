import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GarageMenu from '../componets/base/garage-menu/garage-menu';
import TrackBlock from '../componets/base/track-block/track-block';

const GaragePage: React.FC = () => {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const [page, setPage] = useState(Number(urlParams.get('page')) || 1);

  return (
    <div>
      <GarageMenu page={page} />
      <TrackBlock page={page} setPage={setPage} />
    </div>
  );
};

export default GaragePage;
