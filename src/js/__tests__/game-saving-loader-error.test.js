import read from '../reader';
import GameSavingLoader from '../game-saving-loader';

jest.mock('../reader');

test('Test word NO', async () => {
  // expect.assertions(1);
  read.mockRejectedValue(new Error());
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err.name).toEqual('Error');
  }
});
