import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  handleCardClick,
  handleAddClick,
  handleEditProfileClick,
  handleSignOut,
}) {
  return (
    <main className="profile">
      <SideBar
        handleEditProfileClick={handleEditProfileClick}
        handleSignOut={handleSignOut}
      />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
      />
    </main>
  );
}

export default Profile;
