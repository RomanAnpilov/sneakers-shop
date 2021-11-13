import React from "react";
import styles from "./Card.module.scss";

function Card({ id,title, imageUrl, price, onFavorite, onPlus, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const object = {id, title, imageUrl, price};

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus(object);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite(object);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "img/heart-liked.svg" : "img/heart-unlike.svg"}
          alt="Unliked"
        />
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
