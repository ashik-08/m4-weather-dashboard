import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

function App() {
  return (
    <div className="h-screen grid place-items-center">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
