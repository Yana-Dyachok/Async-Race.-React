import { IEngineResponse } from '../types/interface';
import { ENGINE__LINK } from '../types/const';

const engineControlAPI = async (
  id: number,
  status: string,
): Promise<IEngineResponse> => {
  const response: Response = await fetch(
    `${ENGINE__LINK}?id=${id}&status=${status}`,
    {
      method: 'PATCH',
    },
  );
  return response.json();
};

export default engineControlAPI;
