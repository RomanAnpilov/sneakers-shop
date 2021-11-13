import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) {
  
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const object = { id, title, imageUrl, price };

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
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={isFavorite ? "img/heart-liked.svg" : "img/heart-unlike.svg"}
              alt="Unliked"
            />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="sneakers" />
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
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default Card;
