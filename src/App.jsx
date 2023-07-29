import { useState, useEffect } from "react";
import "./App.css";
import RenderMenue from "./components/filteringMenue.jsx";
import skadedjurData from "../public/skadedjurData.json";

const filteringOptionsUseStateTemplate = {
  besvär: { människor: false, livsmedel: false, trä: false },
  antalBen: { ingaBen: false, tvåBen: false, fyraBen: false, sexBen: false, åttaBen: false },
  vadGör: { flyger: false, kryper: false, biter: false, gnagar: false },
  antalVingar: { ingaVingar: false, tvåVingar: false, fyraVingar: false },
};

function App() {
  const [filteringOptions, setfilteringOptions] = useState(filteringOptionsUseStateTemplate);
  const [matchingItems, setMatchingItems] = useState([]);

  function findMatchingItems(filteringOptions, database) {
    const matchingItems = [];
    for (const key in database) {
      const item = database[key];
      const filter = item.filter;

      let isMatching = true;
      for (const prop in filteringOptions) {
        const filterOption = filteringOptions[prop];
        const filterItem = filter[prop];

        const isAnyTrue = Object.values(filterOption).some((value) => value === true);
        const isAnyTrueInFilter = Object.values(filterItem).some((value) => value === true);

        if (isAnyTrue) {
          if (!isAnyTrueInFilter) {
            isMatching = false;
            break;
          }
          for (const subProp in filterOption) {
            if (filterOption[subProp] && !filterItem[subProp]) {
              isMatching = false;
              break;
            }
          }
        }
      }

      if (isMatching) {
        matchingItems.push(item);
      }
    }
    setMatchingItems(matchingItems);
    return matchingItems;
  }

  useEffect(() => {
    findMatchingItems(filteringOptions, skadedjurData);
  }, [filteringOptions]);

  return (
    <>
      <div className="p-4 ">
        <div className="mx-auto max-w-3xl p-4 bg-base-300 rounded-2xl shadow-lg border border-white">
          <h1 className="font-semibold text-primary-content text-xl">IDENTIFIERA SKADEDJUR</h1>
          <RenderMenue filteringOptions={filteringOptions} setfilteringOptions={setfilteringOptions}></RenderMenue>
        </div>
      </div>
      <div className="p-4">
        <div className="mx-auto max-w-3xl p-4 bg-base-300 rounded-2xl shadow-lg border border-white">
          <div className="font-semibold grid grid-cols-5 gap-2">
            {matchingItems.map((key) => (
              <div key={key.id} className="h-24 bg-amber-400 rounded-xl overflow-hidden border border-white relative transition-all hover:[&>img]:scale-105">
                <h2 className="text-white bg-base-content text-center absolute z-20 bottom-0 bg-opacity-70 w-full p-2">{key.namn}</h2>
                <img className="transition-all relative z-10" src={key.bild} alt={key.namn} srcset="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
