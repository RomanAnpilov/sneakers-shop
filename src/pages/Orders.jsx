import Card from "../components/Card";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://61895903d0821900178d793f.mockapi.io/order"
        );
        setOrders(data.reduce((prev, item) => [...prev, ...item.items], []));
        setIsLoading(false);
      } catch (err) {
        alert("Заказы не подгрузились :(");
      }
    })();
  }, []);

  return (
    <div className="content">
      <div>
        <h1>Мои заказы</h1>
      </div>
      <div className="sneakers">
        {orders.length === 0 ? (
          <div className="cartEmpty">
            <h1 style={{ fontSize: "100px" }}>😔</h1>
            <h2>У вас нет заказов</h2>
            <p>Вы нищеброд? <br /> Оформите хотя бы один заказ.</p>
            <Link to="/">
              <button style={{ width: "300px" }} className="greenButton">
                <img src="img/arrow.svg" alt="arrow" />
                Вернуться назад
              </button>
            </Link>
          </div>
        ) : isLoading ? (
          [...Array(8).keys()].map((index) => <Card key={index} loading />)
        ) : (
          orders.map((item, index) => (
            <Card
              loading={isLoading}
              key={index}
              title={item.title}
              id={item.id}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
