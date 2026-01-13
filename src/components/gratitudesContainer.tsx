import { use } from "react";
import GratitudeListContext from "../context/gratitudListContext";
import GratitudeCard from "./gratitudeCard";
import AddGratitudeButton from "./addGratitudeButton";

const GratitudesContainer = () => {
  // const listOfGratitudeCtx = use(GratitudeListContext);
  return (
    <div className="py-8 grid grid-cols-4 gap-8">
      <GratitudeCard />
      <GratitudeCard />
      <GratitudeCard />
      <GratitudeCard />
      <GratitudeCard />
      <GratitudeCard />
      <GratitudeCard />
      <AddGratitudeButton />
    </div>
  );
};

export default GratitudesContainer;
