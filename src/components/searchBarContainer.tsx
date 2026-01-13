import SearchInput from "./searchInput";
import SearchText from "./searchText";

const SearchBarContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchText />
      <SearchInput />
    </div>
  );
};

export default SearchBarContainer;
