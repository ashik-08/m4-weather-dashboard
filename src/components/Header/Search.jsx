import { useContext } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const FetchLocation = getLocationByName(searchTerm);
  //   setSelectedLocation(FetchLocation);
  // };

  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 2000);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={handleChange}
          className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={SearchIcon} alt="search" />
        </button>
      </div>
    </form>
  );
};

export default Search;
