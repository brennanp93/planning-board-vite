export default function Column1({ planningList, setPlanningList, setStep }) {
  let column1Data = planningList.filter((item) => item.step === 2);
  return (
    <div >
      <div className="tuna">
        <h1>PLACEHOLDER TITLE FOR COLUMN 2</h1>
        <div>
          {column1Data.map((item, idx) => (
            <div key={item.id}>
              <p>{item.content}</p>
              <button onClick={() => setStep(item.id, 3)}>
                Move To Next Step
              </button>
              <button onClick={() => setStep(item.id, 1)}>Move Back</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
