import React from 'react';
import CarSVG from '../../ui/create-car-svg/create-car-svg';
import { RenderCarTrackProps } from '../../../types/interface';
import styles from './render-car-track.module.scss';

const RenderCarTrack: React.FC<RenderCarTrackProps> = ({ car }) => {
  return (
    <div className={styles.garageTrack} key={`track-block-${car.id}`}>
      <h2 key={`name-${car.id}`} className={styles.carName}>
        {car.name}
      </h2>
      <div className={styles.garageContent} key={`track-content-${car.id}`}>
        <CarSVG car={car} sizes={{ width: '120px', height: '50px' }} />
        <div className={styles.garageFlag} key={`flag-${car.id}`}></div>
      </div>
    </div>
  );
};

export default RenderCarTrack;
