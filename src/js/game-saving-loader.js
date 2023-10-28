import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const data = await read(); // возвращается Promise!
    const value = await json(data); // возвращается Promise!
    return JSON.parse(value);
  }
}
