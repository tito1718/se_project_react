# WTWR (What To Wear)

## About the Project

WTWR (What To Wear) is a full-stack weather-based clothing recommendation application built with React, Express, MongoDB, and JWT authentication.

The application retrieves real-time weather data from the OpenWeather API and recommends clothing based on the current temperature. Users can create an account, securely log in, manage their profile, add clothing items, like garments, and remove items they own.

This project was built as part of the TripleTen Software Engineering program and demonstrates full-stack web development using modern JavaScript technologies.

---

## Features

- User registration and login
- JWT authentication
- Persistent login using local storage
- Protected profile page
- Real-time weather data using the OpenWeather API
- Weather-based clothing recommendations
- Add new clothing items
- Delete clothing items you own
- Like and unlike clothing items
- Edit profile name and avatar
- Responsive mobile layout
- Interactive mobile navigation
- Modal windows with:
  - Form validation
  - Loading states
  - ESC key closing
  - Overlay click closing
- Fahrenheit/Celsius temperature toggle
- Dynamic weather card backgrounds
- Custom WTWR favicon

---

## Technologies Used

### Frontend

- React
- React Router
- Vite
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

### APIs

- OpenWeather API

---

## Project Functionality

The application retrieves weather information based on stored coordinates and categorizes the temperature into the following weather types:

- Hot
- Warm
- Cold
- Freezing

Based on the current weather, the application displays clothing items that match the temperature.

Users can:

- Register for an account
- Log in securely
- Stay logged in across browser sessions
- View weather-based clothing recommendations
- Add clothing items
- Like and unlike clothing items
- Delete clothing items they own
- Edit their profile information
- Toggle between Fahrenheit and Celsius
- Use the application on both desktop and mobile devices

---

## Backend Repository

This project uses a separate Express and MongoDB backend.

Backend Repository:

https://github.com/tito1718/se_project_express

---

## API

This project uses the OpenWeather API to retrieve current weather conditions.

https://openweathermap.org/api

---

## Deployment

Frontend Repository:

https://github.com/tito1718/se_project_react

Backend Repository:

https://github.com/tito1718/se_project_express

---

## Project Pitch Video

Watch a walkthrough of the project and learn about the development process and challenges I faced while building WTWR:

https://www.loom.com/share/2d8f3c83c3ab4bd996c3bb1671e938a0

---

## Future Improvements

Potential future enhancements include:

- Search and filter clothing items
- Multiple wardrobe collections
- Weather forecasts for upcoming days
- User profile customization
- Image upload optimization
- Animated weather effects
- Dark mode support

---

## Author

**Cesar "Tito" Chirino**

Software Engineering Student at TripleTen
