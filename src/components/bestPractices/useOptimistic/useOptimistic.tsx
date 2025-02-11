import React, { useState } from "react";
import { useOptimistic, useRef } from "react";

function deliverMessage(message:any) {
    // simulates API call to send messages
    return new Promise((res) => setTimeout(res, 1000, message));
  }
  
  function OptimisticForm({ messages, sendMessage }:any) { // messages & sendMessage represent app state
    const formRef = useRef(null);
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
      messages,
      (currState, newMessage) => [
        ...currState,
        { text: newMessage, sending: true },
      ]
    );
  
    const formAction = async (formData:any) => {
      addOptimisticMessage(formData.get('message'));
    //   formRef.current.reset();
      await sendMessage(formData.get('message'));
    };
  
    return (
      <div>
        {optimisticMessages.map((message:any, index:any) => {
          return (
            <p key={index}>
              {message.text}
              {!!message.sending && <small> (Sending...)</small>}
            </p>
          );
        })}
        <form ref={formRef} action={formAction}>
          <label>
            Type Message &nbsp;
            <input type="text" name="message" />
          </label>
          &nbsp;
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
  
  function App() {
    const [messages, setMessages] = useState([ // app level state
     { text: 'Hello there!', sending: false },
    ]);
    async function sendMessage(message:any) {
      const sentMessage = await deliverMessage(message);
      setMessages((messages:any) => [
        ...messages,
        { text: sentMessage, sending: false },
      ]);
    }
    
    return (
      <>
       <OptimisticForm messages={messages} sendMessage={sendMessage} />
      </>
    ); 
  }

  export default App;