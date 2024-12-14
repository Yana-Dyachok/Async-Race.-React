import { IWinner } from '../types/interface';
import { WINNERS__LINK } from './const';

const updateAPIWinner = async (body: IWinner): Promise<IWinner> =>
  (
    await fetch(`${WINNERS__LINK}/${body.id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export default updateAPIWinner;
