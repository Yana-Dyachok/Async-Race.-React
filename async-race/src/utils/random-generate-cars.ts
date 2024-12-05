import { CarName } from '../types/types';
import { IBody, ICar } from '../types/interface';
import carsNames from './cars-data/cars-names';
import carsModels from './cars-data/cars-models';
import createAPICar from '../api/create-car';

const createRandomCarName = (): CarName => {
  const randomNames = Math.floor(Math.random() * carsNames.length);
  const randomModels = Math.floor(Math.random() * carsModels.length);
  return `${carsNames[randomNames]} ${carsModels[randomModels]}`;
};

const createRandomColor = (): string =>
  Math.floor(Math.random() * 16777215).toString(16);

const createRandomCarBody = (): IBody => {
  return {
    name: createRandomCarName(),
    color: `#${createRandomColor()}`,
  };
};

export const generateHundredCars = (): Promise<ICar[]> => {
  const cars = [];
  for (let i = 0; i < 100; i += 1) {
    cars.push(createAPICar(createRandomCarBody()));
  }
  return Promise.all(cars);
};
