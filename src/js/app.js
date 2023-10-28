import GameSavingLoader from './game-saving-loader';

// TODO: write your code here
console.log('Работает App.js (начало)');

(async () => {
  try {
    const result = await GameSavingLoader.load();
    console.log('Загруженный объект:', result);
  } catch (error) {
    console.log('Ошибка:', error);
  }
})();

console.log('Работает App.js (конец)');
