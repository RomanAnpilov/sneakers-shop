function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина <img onClick={props.onClose} src="img/btn-remove.svg" alt="Button remove" />
        </h2>

        <div className="items">
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(img/sneakers/1.png)" }}
              className="imgItem"
            ></div>
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="img/btn-remove.svg"
              alt="Button remove"
            />
          </div>

          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(img/sneakers/2.png)" }}
              className="imgItem"
            ></div>
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="img/btn-remove.svg"
              alt="Button remove"
            />
          </div>
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
          <button className="greenButton">
            Оформить заказ <img src="img/arrow.svg" alt="arrow"></img>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
