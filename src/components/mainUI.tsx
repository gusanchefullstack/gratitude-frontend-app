import { useState } from "react";
import GratitudeListContext from "../context/gratitudListContext";
import HeaderContainer from "./headerContainer";
import SearchBarContainer from "./searchBarContainer";
import GratitudesContainer from "./gratitudesContainer";
import TagsContainer from "./tagsContainer";

const MainUI = () => {
  const [fetchedGratitudeList, setFetchedGratitudeList] = useState([]);
  const gratitudListContextValue = {
    listOfGratitude: fetchedGratitudeList,
  };
  return (
    <div className="h-auto bg-cuaternary flex-col justify-center items-center font-display px-16">
      <GratitudeListContext value={gratitudListContextValue}>
        <HeaderContainer />
        <SearchBarContainer />
        <GratitudesContainer />
        <TagsContainer />
      </GratitudeListContext>
    </div>
  );
};

export default MainUI;
