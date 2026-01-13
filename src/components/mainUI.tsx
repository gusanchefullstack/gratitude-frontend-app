import HeaderContainer from "./headerContainer";
import SearchBarContainer from "./searchBarContainer";
import GratitudesContainer from "./gratitudesContainer";
import TagsContainer from "./tagsContainer";

const MainUI = () => {
  return (
    <div className="h-screen bg-indigo-200 flex-col justify-center items-center font-display">
      <HeaderContainer />
      <SearchBarContainer />
      <GratitudesContainer />
      <TagsContainer/>
    </div>
  );
};

export default MainUI
