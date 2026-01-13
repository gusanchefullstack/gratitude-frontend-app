import TagCard from "./tagCard";

const TagsContainer = () => {
  return (
    <section className="pt-12 pb-16 flex justify-center items-center flex-wrap gap-4">
      <TagCard name="family" />
      <TagCard name="love" />
      <TagCard name="wife" />
      <TagCard name="money" />
      <TagCard name="travel" />
    </section>
  );
};

export default TagsContainer;
