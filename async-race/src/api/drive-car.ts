import { IDriveResponse } from '../types/interface';
import { ENGINE__LINK } from '../types/const';

const driveAPICar = async (id: number): Promise<IDriveResponse> => {
  const response: Response = await fetch(
    `${ENGINE__LINK}?id=${id}&status=drive`,
    {
      method: 'PATCH',
    },
  ).catch();
  return response.status === 200
    ? { ...(await response.json()) }
    : { success: false };
};

export default driveAPICar;
