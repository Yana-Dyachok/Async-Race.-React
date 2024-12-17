import { ICar } from '../types/interface';
import { GARAGE__LINK } from './const';

const getAPICar = async (id: number): Promise<ICar | null> => {
  try {
    const response: Response = await fetch(`${GARAGE__LINK}/${id}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error('Failed to fetch car by ID');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching car by ID ${id}:`, error);
    return null;
  }
};

export default getAPICar;
