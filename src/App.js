import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import AppContext from "./context";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get("https://61895903d0821900178d793f.mockapi.io/cart"),
          axios.get("https://61895903d0821900178d793f.mockapi.io/favorite"),
          axios.get("https://61895903d0821900178d793f.mockapi.io/items"),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavoriteItems(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Что-то пошло не так :(");
      }
    })();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        onRemoveItem(obj.id);
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post(
          "https://61895903d0821900178d793f.mockapi.io/cart",
          obj
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
    }
  };

  const onAddToFavorite = (obj) => {
    try {
      if (
        favoriteItems.find((favObj) => Number(favObj.id) === Number(obj.id))
      ) {
        axios.delete(
          `https://61895903d0821900178d793f.mockapi.io/favorite/${obj.id}`
        );
        setFavoriteItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://61895903d0821900178d793f.mockapi.io/favorite", obj);
        setFavoriteItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Can not add to favorite");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61895903d0821900178d793f.mockapi.io/cart/${id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoriteItems,
        isItemAdded,
        setCartOpened,
        setCartItems,
        onAddToFavorite,
        onAddToCart,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                items={items}
                isLoading={isLoading}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearch={onChangeSearch}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                favoriteItems={favoriteItems}
                cartItems={cartItems}
              />
            }
          />
          <Route exact path="favorites" element={<Favorites />} />
          <Route exact path="orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
