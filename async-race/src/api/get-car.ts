import { ICar } from '../types/interface';
import { GARAGE__LINK } from './const';

const getAPICar = async (id: number): Promise<ICar> => {
  try {
    const response: Response = await fetch(`${GARAGE__LINK}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch car by ID');
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error fetching car by ID ${error}`);
  }
};
export default getAPICar;
