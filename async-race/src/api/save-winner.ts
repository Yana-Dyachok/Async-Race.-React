import { IWinner } from '../types/interface';
import createWinner from './create-winner';
import getAPIWinner from './get-winner';
import getAPIWinnerStatus from './get-winner-status';
import updateAPIWinner from './update-winner';

const saveAPIWinner = async (id: number, time: number): Promise<void> => {
  const winnerStatus: number = await getAPIWinnerStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner: IWinner = await getAPIWinner(id);
    await updateAPIWinner({
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};

export default saveAPIWinner;
