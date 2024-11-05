import { FavoriteContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (latitude, longitude, location) => {
    const newFavorite = { latitude, longitude, location };
    setFavorites([...favorites, newFavorite]);
  };

  const removeFromFavorites = (latitude, longitude) => {
    const restFavorites = favorites.filter((favorite) => {
      return favorite.latitude !== latitude && favorite.longitude !== longitude;
    });
    setFavorites(restFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
