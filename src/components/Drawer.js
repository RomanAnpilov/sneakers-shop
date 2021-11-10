function Drawer({onClose, onRemove , items=[]}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            onClick={onClose}
            src="img/btn-remove.svg"
            alt="Button remove"
          />
        </h2>

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
          <button className="greenButton">
            Оформить заказ <img src="img/arrow.svg" alt="arrow"></img>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
