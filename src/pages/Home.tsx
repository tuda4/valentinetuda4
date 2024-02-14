import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [please, $please] = useState(false);
  const [p, $p] = useState({ x: "", y: "" });
  const prettyPlease = () => {
    $please(!please);
  };

  const nope = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <>
      <div className={`grid gap-[20px] m-auto place-items-center w-[90vw]`}>
        <img
          alt={please ? "capoo excited" : "capoo flowers"}
          className="h-[300px]"
          src={please ? "/capoo-excited.gif" : "/capoo-flowers.gif"}
        />
        <h2 className="text-center">Hi Cun, will u go out with me?</h2>
        <div className="flex gap-10 w-[70%] justify-between">
          <Link hrefLang="/accept" to={"/accept"}>
            <button
              className="mr-auto bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full"
              onMouseOver={prettyPlease}
              onMouseOut={prettyPlease}
            >
              Yes
            </button>
          </Link>
          <button
            className="transition-all duration-300 ease-in-out bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            style={p.x ? { position: "absolute", top: p.x, right: p.y } : {}}
            onClick={nope}
            onMouseOver={nope}
          >
            No
          </button>
        </div>
      </div>
      {/* {open && <Accept/>} */}
    </>
  );
}
