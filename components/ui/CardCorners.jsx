function CardCorners() {
  return (
    <div className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none">
      <span className="absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%] text-2xl">
        +
      </span>
      <span className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] text-2xl">
        +
      </span>
      <span className="absolute left-0 bottom-0 translate-x-[-50%] translate-y-[50%] text-2xl">
        +
      </span>
      <span className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-2xl">
        +
      </span>
    </div>
  );
}

export default CardCorners;
