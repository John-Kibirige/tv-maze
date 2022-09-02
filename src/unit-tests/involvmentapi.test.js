import { getLikes, postLike } from '../__mocks__/involvmentapi.js';

jest.mock('../modules/involvmentapi.js');

describe('Test for posting and getting a like(s) via the involvement api ', () => {
  test('Posting a new like ', () => {
    postLike({ item_id: '1' }).then((res) => {
      expect(res).toBe('Created');
    });
  });

  test('Getting the number of likes from the api ', () => {
    getLikes().then((response) => {
      expect(response.likes).toBe(5);
    });
  });
});
