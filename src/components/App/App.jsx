import { useEffect, useState } from "react";
import { getItems, addItem, deleteItem } from "../../utils/api";
import { signup, signin, checkToken } from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { apiKey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temperature: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: true,
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [cardToDelete, setCardToDelete] = useState(null);

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setCardToDelete(null);
  };

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const handleRegistration = ({ name, avatar, email, password }) => {
    signup({ name, avatar, email, password })
      .then(() => signin({ email, password }))
      .then(({ token }) => {
        setToken(token);
        return checkToken(token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    signin({ email, password })
      .then(({ token }) => {
        setToken(token);
        return checkToken(token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    removeToken();
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const openConfirmationModal = (card) => {
    setCardToDelete(card);
    setActiveModal("delete-confirmation");
  };

  const handleCardDelete = () => {
    deleteItem(cardToDelete._id)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== cardToDelete._id),
        );

        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleAddItemSubmit = (item, resetForm) => {
    addItem({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    })
      .then((newItem) => {
        setClothingItems((items) => [newItem, ...items]);
        resetForm();
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        getWeather(userCoordinates, apiKey)
          .then((data) => {
            const filteredData = filterWeatherData(data);
            setWeatherData(filteredData);
          })
          .catch(console.error);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      },
    );
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      return;
    }

    checkToken(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        removeToken();
        setCurrentUser({});
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__content">
            <Header
              weatherData={weatherData}
              handleAddClick={handleAddClick}
              isLoggedIn={isLoggedIn}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    clothingItems={clothingItems}
                    handleCardClick={handleCardClick}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>

          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onAddItem={handleAddItemSubmit}
            onCloseModal={closeActiveModal}
          />

          <RegisterModal
            isOpen={activeModal === "register"}
            onRegister={handleRegistration}
            onCloseModal={closeActiveModal}
            onLoginClick={handleLoginClick}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            onLogin={handleLogin}
            onCloseModal={closeActiveModal}
            onRegisterClick={handleRegisterClick}
          />

          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteClick={openConfirmationModal}
          />

          <DeleteConfirmationModal
            isOpen={activeModal === "delete-confirmation"}
            onClose={closeActiveModal}
            onConfirm={handleCardDelete}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
