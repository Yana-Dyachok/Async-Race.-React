import { IWinner } from '../types/interface';
import createWinner from './create-winner';
import getAPIWinner from './get-winner';
import getAPIWinnerStatus from './get-winner-status';
import updateAPIWinner from './update-winner';

const saveAPIWinner = async (id: number, time: number): Promise<void> => {
  try {
    const winnerStatus: number = await getAPIWinnerStatus(id);

    if (winnerStatus === 404) {
      await createWinner({
        id,
        wins: 1,
        time,
      });
    } else {
      const winner: IWinner = await getAPIWinner(id);
      if (!winner) {
        console.warn(`Winner with ID ${id} does not exist or was deleted.`);
        return;
      }

      await updateAPIWinner({
        id,
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      });
    }
  } catch (error) {
    console.error(`Failed to save winner: ${error}`);
  }
};

export default saveAPIWinner;
