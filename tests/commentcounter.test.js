import counter from '../src/module/commentcounter.js';
import * as getc from '../src/module/getComment.js';

getc.getComment = jest.fn(() => Promise.resolve([
  { item_id: 1, username: 'meshu', comment: 'Love it seriously' },
  { item_id: 1, username: 'meshu', comment: 'Love it seriously' },
]));

describe('Test counter function', () => {
  it('Test counter at length 2', async () => {
    const result = await counter(1);
    expect(result).toBe(2);
  });

  it('Test counter not length 3', async () => {
    const result = await counter(1);
    expect(result).not.toBe(3);
  });

  it('Call counter', async () => {
    const result = await counter(1);
    expect(result).not.toBe(3);
  });
});
