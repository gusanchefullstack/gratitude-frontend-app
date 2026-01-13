
const SearchInput = () => {
  return (
    <div className="py-8 w-full flex item justify-center">
      <div className="bg-tertiary rounded-b-4xl rounded-t-4xl w-3/5 flex justify-between items-center">
        <input className="px-8 py-3 w-full text-xl text-primary font-light italic placeholder:text-secondary placeholder:text-lg placeholder:italic outline-0" type="text" name="searchText" id="searchText" placeholder="Search your gratitude here..." />
        <div className="px-6 text-secondary hover:cursor-pointer">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  )
}

export default SearchInput