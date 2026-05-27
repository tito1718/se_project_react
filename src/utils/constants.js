export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear-day.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy-day.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/fog-day.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain-day.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow-day.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../assets/day/storm-day.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear-night.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/night/cloudy-night.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/night/fog-night.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/rain-night.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snow-night.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../assets/night/storm-night.png", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/default-day.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default-night.png", import.meta.url).href,
  },
};

export const defaultClothingItems = [
  {
    _id: 1,
    name: "Cap",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwfGVufDB8fDB8fHww",
  },
  {
    _id: 2,
    name: "Sandals",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1761665765299-4b06db9cb1a9?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdoaXRlJTIwc2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: 3,
    name: "Shorts",
    weather: "hot",
    link: "https://plus.unsplash.com/premium_photo-1769853774467-b60826bbf2f1?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdoaXRlJTIwc2hvcnRzfGVufDB8fDB8fHww",
  },
  {
    _id: 4,
    name: "Sunglasses",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    _id: 5,
    name: "T-Shirt",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    _id: 6,
    name: "Skirt",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1646418962742-c71939412cea?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdoaXRlJTIwc2hvcnQlMjBza2lydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: 7,
    name: "Sneakers",
    weather: "warm",
    link: "https://images.unsplash.com/photo-1656335362192-2bc9051b1824?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBqb3JkYW5zfGVufDB8fDB8fHww",
  },
  {
    _id: 8,
    name: "Dress",
    weather: "hot",
    link: "https://images.unsplash.com/photo-1631234764568-996fab371596?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: 9,
    name: "Hoodie",
    weather: "cold",
    link: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBob29kaWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    _id: 10,
    name: "Jeans",
    weather: "warm",
    link: "https://images.unsplash.com/photo-1647152778230-eb1e19d5b63b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: 11,
    name: "Jacket",
    weather: "cold",
    link: "https://images.unsplash.com/photo-1776273920158-510b171e936f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29hdCUyMGluJTIwY29sb3IlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: 12,
    name: "Loafers",
    weather: "warm",
    link: "https://images.unsplash.com/photo-1730463527791-772d413cad69?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdoaXRlJTIwbG9hZmVyc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: 13,
    name: "Boot",
    weather: "freezing",
    link: "https://plus.unsplash.com/premium_photo-1674719144437-d1c253a8b775?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    _id: 14,
    name: "Coat",
    weather: "freezing",
    link: "https://images.unsplash.com/photo-1611747582190-feff22542ba1?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjB3aW50ZXIlMjBjb2F0fGVufDB8fDB8fHww",
  },
  {
    _id: 15,
    name: "Scarf",
    weather: "freezing",
    link: "https://images.unsplash.com/photo-1513089176717-55db930c2e2a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGUlMjBzY2FyZnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    _id: 16,
    name: "Sweatshirt",
    weather: "warm",
    link: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzd2VhdHNoaXJ0fGVufDB8fDB8fHww",
  },
];

export const coordinates = {
  latitude: 40.840873,
  longitude: -73.872819,
};

export const APIkey = "39ae93eae8e1a61bb0bf5c9bc7766ff0";
