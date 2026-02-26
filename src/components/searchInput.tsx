import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="bg-tertiary rounded-xl flex items-center focus-within:ring-2 focus-within:ring-secondary">
        <input
          className="px-4 py-3 w-full text-primary font-display text-sm placeholder:text-secondary outline-none bg-transparent"
          type="text"
          name="searchText"
          id="searchText"
          placeholder="Search your gratitude here..."
        />
        <div className="px-4 text-secondary hover:text-primary hover:cursor-pointer transition-colors">
          <FiSearch size={18} />
        </div>
      </div>
    </div>
  )
}

export default SearchInput