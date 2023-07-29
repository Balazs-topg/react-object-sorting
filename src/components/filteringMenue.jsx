function RenderMenue({ filteringOptions, setfilteringOptions }) {
  function translate(variableName) {
    let filteringOptionsString = {
      besvär: "VILKET BESVÄR ORSAKAR INSEKTEN/DJURET?",
      människor: "Angriper människor",
      livsmedel: "Angriper livsmedel eller textil",
      trä: "Angriper trä",
      antalBen: "HUR MÅNGA BEN HAR INSEKTEN/DJURET?",

      ingaBen: "Inga ben",
      tvåBen: "2 ben",
      fyraBen: "4 ben",
      sexBen: "6 ben",
      åttaBen: "8 ben",
      vadGör: "VAD GÖR INSEKTEN/DJURET?",

      flyger: "Flyger",
      kryper: "Kryper",
      biter: "Biter",
      gnagar: "Gnager",
      antalVingar: "HUR MÅNGA VINGAR HAR INSEKTEN/DJURET?",

      ingaVingar: "Inga vingar",
      tvåVingar: "2 vingar",
      fyraVingar: "4 vingar",
    };
    if (filteringOptionsString[variableName]) {
      return filteringOptionsString[variableName];
    } else {
      return variableName;
    }
  }

  const renderSubOptions = (subOptions, firstKey, filteringOptions, setfilteringOptions) => {
    return (
      <div className="flex gap-2 flex-wrap mt-4">
        {Object.keys(subOptions).map((key) => (
          <div key={key}>
            <Button text={key} editKey={firstKey} filteringOptions={filteringOptions} setfilteringOptions={setfilteringOptions}></Button>
          </div>
        ))}
      </div>
    );
  };

  function Button({ text, editKey, filteringOptions, setfilteringOptions }) {
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
        className="form-control border border-primary rounded-full px-1 active:opacity-80 active:scale-95 transition-transform"
      >
        <label className="label cursor-pointer flex gap-2">
          <span className="label-text text-base-100 pl-1">{translate(text)}</span>
          <input type="checkbox" onChange={() => {}} checked={isChecked()} className="checkbox checkbox-primary no-animation" />
        </label>
      </div>
    );
  }

  return (
    <div className="bg-base-200 rounded-xl p-3 flex flex-col gap-4 mt-4 text-white">
      {Object.entries(filteringOptions).map(([key, value]) => (
        <div key={key} className="bg-base-content border border-primary p-4 rounded-xl shadow-lg">
          <strong className="text-base-200 font-semibold">
            {translate(key)}:{renderSubOptions(filteringOptions[key], key, filteringOptions, setfilteringOptions)}
          </strong>
        </div>
      ))}
    </div>
  );
}
export default RenderMenue;
