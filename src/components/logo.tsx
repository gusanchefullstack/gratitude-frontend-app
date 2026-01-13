const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex justify-center items-center rounded-full p-8 h-8 w-8 round-full bg-primary text-tertiary">
        <i className="fa-solid fa-hand-holding-heart fa-xl"></i>
      </div>
      <h1 className="text-4xl text-secondary font-logo">Gratitude App</h1>
    </div>
  );
};

export default Logo;
