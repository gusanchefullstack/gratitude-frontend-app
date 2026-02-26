import SearchInput from "./searchInput";
import SearchText from "./searchText";

const SearchBarContainer = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-xl flex flex-col gap-6">
        <SearchText />
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchBarContainer;
