import { useState } from "react";
import { planningBoardData } from "../data";
import "./App.css";

import Column1 from "./Components/Column1";
import Column2 from "./Components/Column2";
import Column3 from "./Components/Column3";

function App() {
  const [planningList, setPlanningList] = useState(planningBoardData);

  function setStep(id, step) {
    let updateStep = [...planningList];
    updateStep.find((t) => t.id === id).step = step;
    setPlanningList(updateStep);
  }

  return (
    <div className="App">
      <Column1
        planningList={planningList}
        setPlanningList={setPlanningList}
        setStep={setStep}
      />
      {/* <Column2
        planningList={planningList}
        setPlanningList={setPlanningList}
        setStep={setStep}
      /> */}
      {/* <Column2
        planningList={planningList}
        setPlanningList={setPlanningList}
        setStep={setStep}
      /> */}
    </div>
  );
}

export default App;
