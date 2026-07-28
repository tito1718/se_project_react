import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import heartLiked from "../../assets/heart-liked.svg";
import heartUnliked from "../../assets/heart-unliked.svg";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes?.some((id) => id === currentUser._id) || false;
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = (evt) => {
    evt.stopPropagation();

    onCardLike({
      _id: item._id,
      isLiked,
    });
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>

        {isLoggedIn && (
          <button
            type="button"
            className="card__like-button"
            onClick={handleLike}
            aria-label={isLiked ? "Unlike item" : "Like item"}
          >
            <img
              src={isLiked ? heartLiked : heartUnliked}
              alt=""
              className="card__like-icon"
            />
          </button>
        )}
      </div>

      <img src={item.imageUrl} alt={item.name} className="card__image" />
    </li>
  );
}

export default ItemCard;
