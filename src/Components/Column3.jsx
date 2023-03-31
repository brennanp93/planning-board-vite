export default function Column1({ planningList, setStep, deleteStep }) {
  let column1Data = planningList?.filter((item) => item.step === 3);
  return (
    <div className="column3">
      <h1>Completed</h1>
      <>
        {column1Data?.map((item, idx) => (
          <div key={item.id} className="step-box">
            <p>{item.content}</p>
            <button onClick={() => setStep(item.id, 2)}>⬅️</button>
            <button onClick={() => deleteStep(item.id)}>❌</button>
          </div>
        ))}
      </>
    </div>
  );
}
