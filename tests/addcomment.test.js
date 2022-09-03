import addComment from '../src/module/addcomment.js';

global.fetch = jest.fn(() => Promise.resolve({
  text: () => Promise.resolve('created'),
}));

describe('Test Add Comment Function', () => {
  it('Add Comment ', async () => {
    const status = await addComment(1);
    expect(status).toBe('created');
  });

  it('Number of Fetch call 1', async () => {
    await addComment(1);
    expect(fetch).not.toBeCalledTimes(3);
  });

  it('Number of Fetch call', async () => {
    await addComment(1);
    expect(fetch).toBeCalledTimes(3);
  });
});
