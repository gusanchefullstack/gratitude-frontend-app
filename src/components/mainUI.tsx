import { GratitudeListContextProvider } from "../context/gratitudListContext";
import HeaderContainer from "./headerContainer";
import SearchBarContainer from "./searchBarContainer";
import GratitudesContainer from "./gratitudesContainer";
import TagsContainer from "./tagsContainer";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

const MainUI = () => {
  return (
    <div className="h-auto bg-cuaternary flex-col justify-center items-center font-display px-16">
      <GratitudeListContextProvider>
        <HeaderContainer />
        <SearchBarContainer />
        <GratitudesContainer />
        <TagsContainer />
      </GratitudeListContextProvider>
    </div>
  );
};

export default MainUI;
