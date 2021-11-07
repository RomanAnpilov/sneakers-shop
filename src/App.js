function App() {
  return (
    <div className="wrapper clear">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img
              width={18}
              height={18}
              src="img/basket.svg"
              alt="shop basket"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" alt="profile icon" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/1.png"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/2.png"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/3.png"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="img/sneakers/4.png"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div>
              <div>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
