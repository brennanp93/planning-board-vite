import { useState } from "react";
import { planningBoardData } from "../data";
import "./App.css";

import Column1 from "./Components/Column1";
import Column2 from "./Components/Column2";
import Column3 from "./Components/Column3";
import HeaderTitle from "./Components/HeaderTitle";

function App() {
  const [planningList, setPlanningList] = useState(planningBoardData);

  function setStep(id, step) {
    let updateStep = [...planningList];
    updateStep.find((t) => t.id === id).step = step;
    setPlanningList(updateStep);
  }

  function deleteStep(id) {
    let deleteStep = [...planningList];
    deleteStep = deleteStep.filter((item) => item.id !== id);
    setPlanningList(deleteStep);
  }

  return (
    <div className="App">
      <HeaderTitle />
      <Column1
        planningList={planningList}
        setPlanningList={setPlanningList}
        setStep={setStep}
        deleteStep={deleteStep}
      />
      <Column2
        planningList={planningList}
        setPlanningList={setPlanningList}
        setStep={setStep}
        deleteStep={deleteStep}
      />
      <Column3
        planningList={planningList}
        setPlanningList={setPlanningList}
        setStep={setStep}
        deleteStep={deleteStep}
      />
    </div>
  );
}

export default App;
