import React, { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
function Carousal({ children: data, autoSlider = false, duration = 3000 }) {
  const [curr, setCurr] = useState(0);
  const pre = () =>
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (autoSlider) {
      const time = setInterval(next, duration);
      return () => clearInterval(time);
    }
    return;
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex w-[300px] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {data}
      </div>
      <div className="absolute left-0 top-1/2 flex justify-between items-center w-full">
        <button
          onClick={pre}
          className="p-1 border-2 bg-white rounded-full active:scale-95"
        >
          <GrPrevious className="text-[2rem] font-bold" />
        </button>
        <button
          onClick={next}
          className="p-1 border-2 bg-white rounded-full active:scale-95"
        >
          <GrNext className="text-[2rem] font-bold" />
        </button>
      </div>
      <div className="absolute left-0 right-0 bottom-4">
        <div className="flex justify-center items-center gap-1">
          {data.map((__, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-white ${
                curr === i && `bg-opacity-100 p-[5px]`
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousal;
