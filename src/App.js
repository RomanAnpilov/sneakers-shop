import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://61895903d0821900178d793f.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://61895903d0821900178d793f.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
    axios
      .get("https://61895903d0821900178d793f.mockapi.io/favorite")
      .then((res) => setFavoriteItems(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://61895903d0821900178d793f.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorite = async (obj) => {  
    try {
      if (favoriteItems.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://61895903d0821900178d793f.mockapi.io/favorite/${obj.id}`)
        setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const {data} = await axios.post("https://61895903d0821900178d793f.mockapi.io/favorite", obj);
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Can not add to favorite")
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61895903d0821900178d793f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearch={onChangeSearch}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route exact path="favorites" element={<Favorites items={favoriteItems} onAddToFavorite={onAddToFavorite} />} />
      </Routes>
    </div>
  );
}

export default App;
