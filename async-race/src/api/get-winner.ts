import { IWinner } from '../types/interface';
import { WINNERS__LINK } from './const';

const getAPIWinner = async (id: number): Promise<IWinner> => {
  try {
    const response: Response = await fetch(`${WINNERS__LINK}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch winner by ID');
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error fetching winner by ID ${error}`);
  }
};
export default getAPIWinner;
