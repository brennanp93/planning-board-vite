export default function Column1({ planningList, setPlanningList, setStep }) {
  let column1Data = planningList.filter((item) => item.step === 1);
  return (
    <div className="column1">
      <h1>PLACEHOLDER TITLE FOR COLUMN 1</h1>
      <div>
        {column1Data.map((item, idx) => (
          <div key={item.id}>
            <p>{item.content}</p>
            <button onClick={() => setStep(item.id, 2)}>
              Move To Next Step
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
