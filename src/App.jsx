import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

let filteringOptionsTempObj = {
  besvär: { människor: false, livsmedel: false, trä: false },
  antalBen: { tvåBen: false, fyraBen: false, sexBen: false, åttaBen: false },
  vadGör: { flyger: false, kryper: false, biter: false, gnagar: false },
  antalVingar: { ingaVingar: false, tvåVingar: false, fyraVingar: false },
};

let variableNamesToReadableNames = {};

function App() {
  const [filteringOptions, setfilteringOptions] = useState(filteringOptionsTempObj);

  function Button({ text, editKey }) {
    function isChecked() {
      return filteringOptions[editKey][text];
    }
    return (
      <div
        onClick={() => {
          let clonedObj = { ...filteringOptions };
          clonedObj[editKey][text] = !clonedObj[editKey][text];
          console.log(clonedObj);
          setfilteringOptions(clonedObj);
        }}
        className="form-control border border-primary rounded-full px-1 active:scale-95 transition-transform"
      >
        <label className="label cursor-pointer flex gap-2">
          <span className="label-text text-base-100 pl-1">{text}</span>
          <input type="checkbox" onChange={() => {}} checked={isChecked()} className="checkbox checkbox-primary no-animation" />
        </label>
      </div>
    );
  }

  const renderSubOptions = (subOptions, firstKey) => {
    return (
      <div className="flex gap-2 flex-wrap mt-4">
        {Object.keys(subOptions).map((key) => (
          <div key={key}>
            <Button text={key} editKey={firstKey}></Button>
          </div>
        ))}
      </div>
    );
  };

  function renderOptions(options) {
    return (
      <div className="bg-base-200 rounded-xl p-3 flex flex-col gap-4 mt-4 text-white">
        {Object.entries(options).map(([key, value]) => (
          <div key={key} className="bg-base-content p-4 rounded-xl shadow-lg">
            <strong className="text-base-200 font-semibold">
              {key}:{renderSubOptions(options[key], key)}
            </strong>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-7">
      <div className="mx-auto max-w-3xl p-4 bg-base-300 rounded-2xl shadow-lg border border-white">
        <h1 className="font-semibold text-primary-content text-xl">IDENTIFIERA SKADEDJUR</h1>
        {renderOptions(filteringOptionsTempObj)}

        {
          //          <div className="bg-base-200 rounded-xl p-3 flex flex-col gap-4 mt-4">
          //            <div className="bg-base-content p-4 rounded-xl shadow-lg">
          //              <div>
          //                <h2 className="text-base-200 font-semibold">VILKET BESVÄR ORSAKAR INSEKTEN/DJURET?</h2>
          //                <div className="flex gap-2 flex-wrap mt-4">
          //                  <Button changingKey={"besvär"} text={"Angriper människor"}></Button>
          //                  <Button changingKey={"besvär"} text={"Angriper livsmedel eller textil"}></Button>
          //                  <Button changingKey={"besvär"} text={"Angriper trä"}></Button>
          //                </div>
          //              </div>
          //            </div>
          //            <div className="bg-base-content p-4 rounded-xl shadow-lg">
          //              <div>
          //                <h2 className="text-base-200 font-semibold">HUR MÅNGA BEN HAR INSEKTEN/DJURET?</h2>
          //                <div className="flex gap-2 flex-wrap mt-4">
          //                  <Button text={"2 ben"}></Button>
          //                  <Button text={"4 ben"}></Button>
          //                  <Button text={"6 ben"}></Button>
          //                  <Button text={"8 ben"}></Button>
          //                </div>
          //              </div>
          //            </div>
          //            <div className="bg-base-content p-4 rounded-xl shadow-lg">
          //              <div>
          //                <h2 className="text-base-200 font-semibold">VAD GÖR INSEKTEN/DJURET?</h2>
          //                <div className="flex gap-2 flex-wrap mt-4">
          //                  <Button text={"Flyger"}></Button>
          //                  <Button text={"Kryper"}></Button>
          //                  <Button text={"Biter"}></Button>
          //                  <Button text={"Gnager"}></Button>
          //                </div>
          //              </div>
          //            </div>
          //            <div className="bg-base-content p-4 rounded-xl shadow-lg">
          //              <div>
          //                <h2 className="text-base-200 font-semibold">HUR MÅNGA VINGAR HAR INSEKTEN/DJURET? ?</h2>
          //                <div className="flex gap-2 flex-wrap mt-4">
          //                  <Button text={"Inga vingar"}></Button>
          //                  <Button text={"2 vingar"}></Button>
          //                  <Button text={"4 vingar"}></Button>
          //                </div>
          //              </div>
          //            </div>
          //            <div className="flex justify-center items-center">
          //              <input type="text" placeholder="Sök" className="input input-bordered input-primary w-full bg-base-content text-white" />
          //            </div>
          //          </div>
        }
      </div>
    </div>
  );
}

export default App;
