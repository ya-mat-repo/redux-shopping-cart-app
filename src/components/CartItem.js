import React from 'react';
import { useDispatch } from 'react-redux';
import { MinusIcons, PlusIcons } from '../HeroIcons';
import { removeItem, increase, decrease } from '../features/cart/CartSlice';

const CartItem = ({ id, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src="https://picsum.photos/200" alt="" />
      <div>
        <h4> {title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <PlusIcons />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() =>
            amount === 1 ? dispatch(removeItem(id)) : dispatch(decrease(id))
          }
        >
          <MinusIcons />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
