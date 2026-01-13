const GratitudeCard = () => {
  return (
    <article className="flex flex-col w-80 bg-primary gap-4 p-6 rounded-2xl">
      <div className="flex justify-end gap-3 text-tertiary">
        <span className="hover:cursor-pointer"><i className="fa-solid fa-pen-to-square"></i></span>
        <span className="hover:cursor-pointer"><i className="fa-solid fa-trash-can"></i></span>
      </div>
      <h2 className="text-xl font-bold text-cuaternary">Lorem ipsum dolor sit amet, consectetur tincidunt.</h2>
      <p className="text-sm font-light text-cuaternary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat commodo elit nec ultrices. Quisque feugiat, lorem ut maximus finibus aliquam.</p>
      <p className="text-sm font-light text-cuaternary">1/15/2026 2:30 PM</p>
      <aside className="flex justify-center items-center gap-2">
        <span className="text-xs font-semibold text-primary py-1 px-1 rounded-md bg-tertiary hover:cursor-pointer">Family</span>
        <span className="text-xs font-semibold text-primary py-1 px-1 rounded-md bg-tertiary hover:cursor-pointer">Love</span>
        <span className="text-xs font-semibold text-primary py-1 px-1 rounded-md bg-tertiary hover:cursor-pointer">Wife</span>
        <span className="text-xs font-semibold text-primary py-1 px-1 rounded-md bg-tertiary hover:cursor-pointer">Money</span>
        <span className="text-xs font-semibold text-primary py-1 px-1 rounded-md bg-tertiary hover:cursor-pointer">Travel</span>
      </aside>
    </article>
  );
};

export default GratitudeCard;
