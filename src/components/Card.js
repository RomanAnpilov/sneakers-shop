function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/heart-unlike.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="img/sneakers/1.png" alt="sneakers" />
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
  );
}

export default Card;