import { FiEdit2, FiTrash2 } from "react-icons/fi";

const truncate = (text: string, max: number) =>
  text.length > max ? text.slice(0, max) + "…" : text;

const GratitudeCard = ({ title, details, date, tags }) => {
  return (
    <article className="flex flex-col w-72 h-80 bg-primary gap-3 p-4 rounded-2xl">
      <div className="flex justify-end gap-3 text-tertiary">
        <span className="hover:cursor-pointer hover:text-secondary transition-colors">
          <FiEdit2 size={15} />
        </span>
        <span className="hover:cursor-pointer hover:text-secondary transition-colors">
          <FiTrash2 size={15} />
        </span>
      </div>
      <h2 className="text-xl font-bold text-cuaternary">{truncate(title, 50)}</h2>
      <p className="text-sm font-light text-cuaternary flex-1">{truncate(details, 120)}</p>
      <p className="text-xs font-light text-cuaternary">{new Date(date).toDateString()}</p>
      <div className="flex flex-wrap gap-1 overflow-hidden">
        {tags.map((tag: string) => (
          <span className="text-xs font-semibold text-primary py-1 px-2 rounded-md bg-tertiary hover:cursor-pointer" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default GratitudeCard;
