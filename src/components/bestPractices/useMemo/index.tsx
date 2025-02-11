import React, { useState } from 'react';

// Non-Memoized Child Component
const MemoChild = ({ num }: { num: number }) => {
  console.log("Non -Memoized Child rendered");
  return <div>Non-Memoized Child Component: {num}</div>;
};

// Memoized Child Component
const MemoizedChild = React.memo(({ num }: { num: number }) => {
  console.log("Memoized Child rendered");
  return <div>Memoized Child Component: {num}</div>;  
});

const UseMemoExample = () => {
  const [num, setNum] = useState(0); 
  const [num1, setNum1] = useState(0);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/*  Without Memoization */}
      <div style={{ border: '1px solid black', padding: '10px', width: '45%' }}>
        <h2>Non Memoized</h2>
        <h3>{num}</h3>
        <MemoChild num={num} /> 
        <button onClick={() => setNum(num + 1)}>Increment Left</button>
      </div>

      {/*  With Memoization */}
      <div style={{ border: '1px solid black', padding: '10px', width: '45%' }}>
        <h2>Memoized</h2>
        <h3>{num1}</h3>
        <MemoizedChild num={num1} /> 
        <button onClick={() => setNum1(num1 + 1)}>Increment Right</button>
      </div>
    </div>
  );
};

export default UseMemoExample;
