import { Link } from "react-router-dom";
import {useCart} from "../hooks/useCart"
import React from "react";

function Header(props) {
  const {totalPrice} = useCart();

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="img/basket.svg" alt="shop basket" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="favorites">
            <img
              width={18}
              height={18}
              src="img/favorites.svg"
              alt="favorite"
            />
          </Link>
        </li>
        <li>
          <Link to="orders">
          <img width={18} height={18} src="img/user.svg" alt="profile icon" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
