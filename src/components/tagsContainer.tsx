import { use } from "react";
import GratitudeListContext from "../context/gratitudListContext";
import TagCard from "./tagCard";

const TagsContainer = () => {
  const gratitudeListCtx = use(GratitudeListContext);

  return (
    <section className="pt-12 pb-16 flex justify-center items-center flex-wrap gap-4">
      {[
        ...new Set(gratitudeListCtx.myGratitude.flatMap((item) => item.tags)),
      ].map((tag) => (
        <TagCard name={tag} key={tag}/>
      ))}
    </section>
  );
};

export default TagsContainer;
