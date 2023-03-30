export default function Column1({ planningList, setPlanningList, setStep }) {
  let column1Data = planningList.filter((item) => item.step === 3);
  return (
    <div className="column3">
      <h1>PLACEHOLDER TITLE FOR COLUMN 3</h1>
      <div>
        {column1Data.map((item, idx) => (
          <div key={item.id}>
            <p>{item.content}</p>
            <button onClick={() => setStep(item.id, 2)}>Move Back</button>
          </div>
        ))}
      </div>
    </div>
  );
}
