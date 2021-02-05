export default class Diagonal {
  constructor() {
    this.arr = [];
    this.rng = 0;
  }
  /**
  * Запись матрицы в класс
  * @param arr Массив со значениями матрицы
  * @param rng Размер матрицы
  */

  setArrayMatrix(arr, rng) {
    this.arr = arr;
    this.rng = rng;
  }
  /**
   * Функция расчета главной диагонали
   * @returns {number} Подсчет суммы главной диагонали
   */
  principalDiagonalSum() {
    let s = 0;
    let i = 0;
    while (i < this.rng) {
      s += this.arr[i][i];
      i += 1;
    }
    return s;
  }

  /**
   * Функция расчета побочной диагонали
   * @returns {number} Подсчет суммы побочной диагонали
   */
  secondaryDiagonalSum() {
    let s = 0;
    let i = 0;
    while (i < this.rng) {
      s += this.arr[i][this.rng - i - 1];
      i += 1;
    }
    return s;
  }
}