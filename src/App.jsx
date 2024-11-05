import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import FavoriteProvider from "./provider/FavoriteProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <div className="h-screen grid place-items-center">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
