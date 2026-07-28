import { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  handleCardClick,
  handleCardLike,
  handleAddClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter((item) => {
    return (
      item.owner?._id === currentUser._id || item.owner === currentUser._id
    );
  });

  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>

        <button
          type="button"
          className="clothes-section__add-btn"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>

      <ul className="clothes-section__items">
        {userItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
