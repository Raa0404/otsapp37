import React, { useState } from "react";

const App = () => {
  const [phase, setPhase] = useState(1);

  const handleNext = () => setPhase(phase + 1);

  return (
    <div style={{ padding: 20 }}>
      {phase === 1 && (
        <>
          <h2>Phase 1: Welcome</h2>
          <input placeholder="Name" />
          <input placeholder="SOL ID (8701–8771)" />
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button onClick={handleNext}>Next</button>
        </>
      )}
      {phase === 2 && (
        <>
          <h2>Phase 2: Search Account</h2>
          <input placeholder="Search by Account No. or Name" />
          <input placeholder="Legal Charges Pending (if any)" />
          <button onClick={handleNext}>Next</button>
        </>
      )}
      {phase === 3 && (
        <>
          <h2>Phase 3: Account Details</h2>
          <p>Account No: 12345678901234</p>
          <p>NPA Date: 01/04/2023</p>
          <p>NPA Category: Substandard</p>
          <p>Borrower Name: John Doe</p>
          <p>CIF ID: C123456</p>
          <p>CIF Outstanding: ₹1,00,000</p>
          <p>CIF Principal: ₹80,000</p>
          <p>Notional Dues: ₹1,20,000</p>
          <p>Sacrifice: ₹20,000</p>
          <p style={{ color: 'red' }}>Minimum Compromise Amount: ₹65,000 (based on 80%)</p>
        </>
      )}
    </div>
  );
};

export default App;
