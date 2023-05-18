import React from "react";
import Head from "../head";
import List from "../list";
import "./style.css";

const CartView = ({list, onDeleteItem, onCloseCart, total}) => {
  return (
    <div className="CartView">
      <Head title={"Корзина"}>
        <button className="CartView-close" onClick={onCloseCart}>Закрыть</button>
      </Head>
      <List list={list} onAction={onDeleteItem} actionTitle={"Удалить"} />
      <div className="CartView-total">
        <strong>Итого</strong>
        <strong>{total} ₽</strong>
      </div>
    </div>
  );
};

export default CartView;