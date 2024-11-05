import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import FavoriteProvider from "./provider/FavoriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
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
  );
}

export default App;
