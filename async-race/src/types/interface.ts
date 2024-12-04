import { CarName, CarColor, Sort, Order } from './types';

export interface InputProps {
  onChange: (value: string) => void;
  text?: string;
}

export interface PopUpProps {
  text: string;
  onClose: () => void;
}

export interface ICar {
  name: CarName;
  color: CarColor;
  id: number;
}
export interface IBody {
  name: CarName | string;
  color: CarColor | string;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface ICarsResponse {
  items: ICar[];
  count: string;
}

export interface IEngineResponse {
  velocity: number;
  distance: number;
}

export interface IWinnerCars extends IWinner {
  car: ICar;
}

export interface IWinnersResponse {
  items: IWinnerCars[];
  count: string;
}

export interface IWinnerSort {
  pageNumber: number;
  sort: Sort;
  order: Order;
}

export interface IDriveResponse {
  success: true | false;
}

export interface IButtonEvents {
  target: HTMLButtonElement;
  carId: number;
}
