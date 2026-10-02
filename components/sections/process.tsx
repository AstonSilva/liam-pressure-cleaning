export function Process() {
  const steps = [
    [
      "Request an estimate",
      "Call, text, or use our estimate form to start the conversation.",
    ],
    [
      "Tell us what needs cleaning",
      "Share your property location and the exterior surfaces you have in mind.",
    ],
    [
      "Schedule your cleaning",
      "Coordinate your service directly with Liam Pressure Cleaning.",
    ],
  ];
  return (
    <section
      className="section container process-section"
      aria-labelledby="process-title"
    >
      <div className="centered-heading">
        <p className="eyebrow">FROM FIRST HELLO TO FRESH EXTERIORS</p>
        <h2 id="process-title">Getting started is simple.</h2>
      </div>
      <ol className="process-grid">
        {steps.map(([title, desc], i) => (
          <li key={title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
