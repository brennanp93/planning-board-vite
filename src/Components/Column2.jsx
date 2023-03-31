export default function Column1({ planningList, setStep, deleteStep }) {
  let column1Data = planningList?.filter((item) => item.step === 2);
  return (
    <div className="column2">
      <h1>In Progress</h1>
      <>
        {column1Data.map((item, idx) => (
          <div key={item.id} className="step-box">
            <p>{item.content}</p>
            <button onClick={() => setStep(item.id, 3)}>Next Step</button>
            <button onClick={() => setStep(item.id, 1)}>Move Back</button>
            <button onClick={() => deleteStep(item.id)}>X</button>
          </div>
        ))}
      </>
    </div>
  );
}
