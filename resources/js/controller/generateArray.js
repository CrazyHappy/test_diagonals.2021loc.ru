export default class GenerateArray {
  constructor() {
  }
  /**
   * Функция генерирует матрицу заданной длины со случайными числами
   * @param range Длина матрицы
   * @returns {Array} Возвращает матрицу с указанной длиной
   */
  generate(range) {
    let arrMain = [];
    for (let i = 0; i < range; i++) {
      let secArr = [];
      for (let j = 0; j < range; j++) {
        let temp = Math.floor(Math.random() * 11);
        secArr.push(temp);
      }
      arrMain.push(secArr);
    }
    return arrMain;
  }

}