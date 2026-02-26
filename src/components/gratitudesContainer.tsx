import { use } from "react";
import GratitudeListContext from "../context/gratitudListContext";
import GratitudeCard from "./gratitudeCard";
import AddGratitudeButton from "./addGratitudeButton";


const GratitudesContainer = () => {

  const gratitudeListCtx = use(GratitudeListContext);

   return (
    <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
      {gratitudeListCtx.myGratitude.map((item) => (
        <GratitudeCard key={ item.id } title={item.title} details={item.details} date={item.updatedAt} tags={item.tags}/>
      ))}
      <AddGratitudeButton />
    </div>
  );
};

export default GratitudesContainer;
