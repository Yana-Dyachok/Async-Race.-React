import React from 'react';
import RenderCarTrack from '../../elements/render-car-track/render-car-track';
import RenderControls from '../../elements/render-controls/render-controls';
import { RenderControlsProps } from '../../../types/interface';
import styles from './track-block.module.scss';

const RenderTrack: React.FC<RenderControlsProps> = ({ car, currentPage }) => {
  return (
    <div className={styles.garageTrackBlock}>
      <RenderControls
        car={car}
        currentPage={currentPage}
        key={`control-track-${car.id}`}
      />
      <RenderCarTrack car={car} key={`car-track-${car.id}`} />
    </div>
  );
};

export default RenderTrack;
