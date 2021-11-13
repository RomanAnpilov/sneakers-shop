import Info from "./Info";
import React from "react";
import AppContext from "../context";
import axios from "axios";

function Drawer({ onClose, onRemove, items = [] }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://61895903d0821900178d793f.mockapi.io/order",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      cartItems.forEach((item) => {
        axios.delete(
          "https://61895903d0821900178d793f.mockapi.io/cart/" + item.id
        );
      });
    } catch (e) {
      alert("Не удалось сделать заказ");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img onClick={onClose} src="img/btn-remove.svg" alt="Button remove" />
        </h2>
        {items.length !== 0 ? (
          <>
            <div className="items">
              {items.map((item) => (
                <div className="cartItem">
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className="imgItem"
                  ></div>
                  <div>
                    <p>{item.title}</p>
                    <b>{item.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(item.id)}
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Button remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ <img src="img/arrow.svg" alt="arrow"></img>{" "}
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isOrderComplete ? "img/order.svg" : "img/empty.svg"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
