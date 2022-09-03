import addComment from '../src/__mocks__/comment.js';

jest.mock('../src/module/addcomment.js');

describe('Test Add Comment Function', () => {
  it('Add Comment ', async () => {
    const status = await addComment(1);
    expect(status).toBe('created');
  });
});
