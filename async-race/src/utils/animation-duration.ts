import { IEngineResponse } from '../types/interface';

const getAnimationDuration = (engineResponse: IEngineResponse): number => {
  if (engineResponse.velocity === 0) {
    throw new Error("velocity can't be zero");
  }
  return engineResponse.distance / engineResponse.velocity / 1000;
};

export default getAnimationDuration;
