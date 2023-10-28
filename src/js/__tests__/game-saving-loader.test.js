import GameSavingLoader from '../game-saving-loader';

jest.setTimeout(15000);

test('Проверка функции GameSavingLoader', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  expect(GameSavingLoader.load).toBeDefined();
  expect(await GameSavingLoader.load()).toEqual(JSON.parse(data));
});
