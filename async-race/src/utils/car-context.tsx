import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ICar } from '../types/interface';

interface CarContextType {
  selectedCar: ICar | null;
  setSelectedCar: (car: ICar) => void;
}

interface CarProviderProps {
  children: ReactNode;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
  const [selectedCar, setSelectedCar] = useState<ICar | null>(null);

  return (
    <CarContext.Provider value={{ selectedCar, setSelectedCar }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};
