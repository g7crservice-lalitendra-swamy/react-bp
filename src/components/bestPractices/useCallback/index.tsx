import React, { useState, useCallback, useMemo } from "react";
import CallbackChild from "./CallbackChild";

const UseCallbackExample = () => {
  const [num, setNum] = useState(0);
  const [showWithCallback, setShowWithCallback] = useState(true); // Toggle state

  // Memoized function (useCallback)
  const handleUpdateNum = useCallback(() => {
    console.log("handleUpdateNum called (useCallback)");
  }, []);

  // Memoized child component (useMemo)
  const getChildComp = useMemo(
    () => <CallbackChild handleUpdateNum={handleUpdateNum} />,
    [handleUpdateNum]
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={() => setShowWithCallback(!showWithCallback)}>
        Toggle: {showWithCallback ? "Show Without useCallback" : "Show With useCallback"}
      </button>

      {showWithCallback ? (
        // With useCallback
        <div style={{ border: "2px solid green", padding: "10px", marginTop: "20px" }}>
          <h2>With useCallback</h2>
          <h1>{num}</h1>
          {getChildComp}
          <button onClick={() => setNum(num + 1)}>Addition</button>
        </div>
      ) : (
        // Without useCallback
        <div style={{ border: "2px solid red", padding: "10px", marginTop: "20px" }}>
          <h2>Without useCallback</h2>
          <h1>{num}</h1>
          <CallbackChild handleUpdateNum={() => console.log("handleUpdateNum called (Without useCallback)")} />
          <button onClick={() => setNum(num + 1)}>Addition</button>
        </div>
      )}
    </div>
  );
};

export default UseCallbackExample;
