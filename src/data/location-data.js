const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.8041,
    longitude: 90.4152,
  },
  {
    location: "Chittagong",
    latitude: 22.3752,
    longitude: 91.8349,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Paris",
    latitude: 48.856613,
    longitude: 2.352222,
  },
  {
    location: "Tokyo",
    latitude: 35.689487,
    longitude: 139.691711,
  },
  {
    location: "Sydney",
    latitude: -33.86882,
    longitude: 151.209296,
  },
  {
    location: "Dubai",
    latitude: 25.276987,
    longitude: 55.296249,
  },
  {
    location: "Los Angeles",
    latitude: 34.052235,
    longitude: -118.243683,
  },
  {
    location: "Istanbul",
    latitude: 41.00824,
    longitude: 28.978359,
  },
  {
    location: "Moscow",
    latitude: 55.755825,
    longitude: 37.617298,
  },
  {
    location: "Beijing",
    latitude: 39.904202,
    longitude: 116.407394,
  },
  {
    location: "Mumbai",
    latitude: 19.07609,
    longitude: 72.877426,
  },
  {
    location: "Berlin",
    latitude: 52.520008,
    longitude: 13.404954,
  },
  {
    location: "Cape Town",
    latitude: -33.92487,
    longitude: 18.424055,
  },
  {
    location: "Rome",
    latitude: 41.902782,
    longitude: 12.496366,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.906847,
    longitude: -43.172897,
  },
  {
    location: "Buenos Aires",
    latitude: -34.603683,
    longitude: -58.381557,
  },
  {
    location: "Bangkok",
    latitude: 13.756331,
    longitude: 100.501762,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
