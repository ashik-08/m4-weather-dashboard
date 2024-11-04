import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <div className="h-screen grid place-items-center">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
