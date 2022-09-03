import getData from '../__mocks__/data.js';

jest.mock('../modules/data.js');

describe('This test checks if the data is received from the api ', () => {
  test('Check if the right id is received', () => {
    getData().then((response) => {
      expect(response.id).toBe(1);
    });
  });

  test('Check if the right names are received', () => {
    getData().then((resp) => {
      expect(resp.name).toBe('pilot');
    });
  });

  test('Check if the image url to be returned is not empty', () => {
    getData().then((res) => {
      expect(res.original.length).toBeTruthy();
    });
  });
});
