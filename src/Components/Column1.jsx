export default function Column1({ planningList, setStep, deleteStep }) {
  let column1Data = planningList?.filter((item) => item.step === 1);

  return (
    <div className="column1">
      <h1>Planning Stage</h1>
      {/* <div> */}
      <>
        {column1Data.map((item, idx) => (
          <div key={item.id} className="step-box">
            <p>{item.content}</p>
            <button onClick={() => setStep(item.id, 2)}>Next Step</button>
            <button onClick={() => deleteStep(item.id)}>X</button>
          </div>
        ))}
      </>
      {/* </div> */}
    </div>
  );
}
