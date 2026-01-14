const GratitudeCard = ({ title, details, date, tags }) => {
  return (
    <article className="flex flex-col w-80 bg-primary gap-4 p-6 rounded-2xl">
      <div className="flex justify-end gap-3 text-tertiary">
        <span className="hover:cursor-pointer hover:text-secondary">
          <i className="fa-solid fa-pen-to-square"></i>
        </span>
        <span className="hover:cursor-pointer hover:text-secondary">
          <i className="fa-solid fa-trash-can"></i>
        </span>
      </div>
      <h2 className="text-xl font-bold text-cuaternary">{title}</h2>
      <p className="text-sm font-light text-cuaternary">{details}</p>
      <p className="text-sm font-light text-cuaternary">{new Date(date).toDateString()}</p>
      <aside className="flex justify-center items-center gap-2">
        {tags.map((tag:string) => (
          <span className="text-xs font-semibold text-primary py-1 px-1 rounded-md bg-tertiary hover:cursor-pointer">
            {tag}
          </span>
        ))}
      </aside>
    </article>
  );
};

export default GratitudeCard;
