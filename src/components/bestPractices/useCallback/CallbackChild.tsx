// MemoChild.js
import React from 'react';

const CallbackChild = ({ onClick}:any) => {
    console.log("child component rendered")
  
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    );
};

export default CallbackChild;
