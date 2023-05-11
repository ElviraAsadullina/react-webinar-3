const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */

export const enumLinkWord = (number) => {
  const nums = [2, 0, 1, 1, 1, 2];
  const words = ['раз', 'раза', 'раз'];
  let finalWord;

  if (number === 0) {
    finalWord = titles[2];
  } else if (number % 100 > 4 && number % 100 < 20) {
    finalWord = words[2];
  } else {
    finalWord = words[nums[Math.min(number % 10, 5)]];
  }

  return finalWord;
}

/**
 * Создание элемента со свойствами и вложенными элементами
 * @returns {number}
 */