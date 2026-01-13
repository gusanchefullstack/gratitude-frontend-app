const TagCard = ({name}) => {
  return (
    <span className="text-lg font-semibold text-primary py-2 px-3 rounded-md bg-tertiary hover:cursor-pointer italic">
      {name}
    </span>
  );
};

export default TagCard;
