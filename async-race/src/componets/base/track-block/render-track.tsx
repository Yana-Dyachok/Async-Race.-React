import React from 'react';
import RenderCarTrack from '../../elements/render-car-track/render-car-track';
import RenderControls from '../../elements/render-controls/render-controls';
import { RenderCarTrackProps } from '../../../types/interface';
import styles from './track-block.module.scss';

const RenderTrack: React.FC<RenderCarTrackProps> = ({ car }) => {
  return (
    <div className={styles.garageTrackBlock}>
      <RenderControls car={car} key={`control-track-${car.id}`} />
      <RenderCarTrack car={car} key={`car-track-${car.id}`} />
    </div>
  );
};

export default RenderTrack;
