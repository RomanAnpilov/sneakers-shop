import React from "react";
import styles from "./Card.module.scss";

function Card({title, imageUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({title, imageUrl, price});
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="img/heart-unlike.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div>
        <div>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "img/plus-tapped.svg" : "img/plus-dis.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
