/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление и удаление записи из корзины по коду
   * @param code
   */

  addCartItem(code) {
    const cartList = [...this.state.cartList];
    const currentItem = cartList.find((unit) => unit.code == code);
    if (currentItem) {
      ++currentItem.count;
    } else {
      const item = this.state.list.find((unit) => unit.code == code);
      cartList.push({...item, count: 1});
    }
    this.setState({
      ...this.state,
      cartList,
    });
  }

  deleteCartItem(code) {
    this.setState({
      ...this.state,
      cartList: this.state.cartList.filter((unit) => unit.code !== code),
    });
  }
}

export default Store;
