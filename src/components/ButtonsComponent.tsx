const ButtonsComponent = () => {
  const BtnArray = [
    7,
    8,
    9,
    "Del",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "X",
  ];
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="bg-[hsl(223,31%,20%)] rounded-lg">
          <h1 className="text-3xl text-right p-4 text-white">334855</h1>
        </div>
        <div className="bg-[hsl(223,31%,20%)] grid gap-6 p-6 grid-cols-4 rounded-lg">
          {BtnArray.map((item) => (
            <button className="p-1 rounded-lg bg-white text-[hsl(223,31%,20%)] text-xl font-bold">
              {item}
            </button>
          ))}
          <button className="col-span-2">reset</button>
          <button className="col-span-2">=</button>
        </div>
      </div>
    </>
  );
};

export default ButtonsComponent;
