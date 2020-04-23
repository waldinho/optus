import { getData } from '../api/getData';
import axios from 'axios';

jest.mock('axios');

it('returns the mock data', async () => {
  axios.get.mockResolvedValue({
    data: [{
      buttons: [8,41,-46,-38],
      bars: [16,12,68],
      limit: 210,
    }]
  });

  const data = await getData();
  expect(data[0].buttons[2]).toBe(-46);
  expect(data[0].bars[1]).toBe(12);
  expect(data[0].limit).toBe(210);
});