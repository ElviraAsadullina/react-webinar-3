import React, {useState} from "react";
import CartView from "../cart-view";
import {plural} from "../../utils";
import "./style.css";

const Cart = ({list, onDeleteItem}) => {
  const [onActiveCart, setOnActiveCart] = useState(false);

  const count = list.length;

  const totalPrice =
    count && list.reduce((prev, next) => prev + next.price * next.count, 0);

  return (
    <>
      <div className="Cart">
        <span>В корзине:</span>
        <span class="Cart-info">{count ? ` ${count} ${plural(count, {one: 'товар', few: 'товара', many: 'товаров'})} 
        / ${totalPrice} ₽` : "пусто"}</span>
        <button onClick={() => setOnActiveCart(true)}>Перейти</button>
      </div>
      {onActiveCart && (<CartView total={totalPrice} onCloseCart={() => setOnActiveCart(false)} onDeleteItem={onDeleteItem}
          list={list}
        />
      )}
    </>
  );
};

export default Cart;