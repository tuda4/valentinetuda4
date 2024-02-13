import { useState } from "react";
import Accept from "./Accept";

export default function Home() {
  const [please, $please] = useState(false);
  const [p, $p] = useState({ x: "", y: "" });
  const [open, setOpen] = useState(false);
  const prettyPlease = () => {
    $please(!please);
  };

  const nope = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({ x: `${x}%`, y: `${y}%` });
  };

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      {!open && <div className={`grid gap-[10px] m-auto place-items-center w-[100vw]`}>
        <img
          alt={please ? "capoo excited" : "capoo flowers"}
          className="h-[400px]"
          src={please ? "/capoo-excited.gif" : "/capoo-flowers.gif"}
        />
        Hi Cun, will u go out with me?
        <div className="flex gap-10 w-[60%]">
          <button
            className="mr-auto bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full"
            onMouseOver={prettyPlease}
            onMouseOut={prettyPlease}
            onClick={handleOpen}
          >
              Yes
          </button>
          <button
            className="transition-all duration-300 ease-in-out bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            style={p.x ? { position: "absolute", top: p.x, right: p.y } : {}}
            onClick={nope}
            onMouseOver={nope}
          >
            No
          </button>
        </div>
      </div>}
      {open && <Accept/>}
    </>
  );
}
