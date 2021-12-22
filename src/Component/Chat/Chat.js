import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div>
      <div className="Chat_container">
        <div className="Chat_wrapper">
          <div className="Chat_header">
            <h1>IRIS</h1>
            <h1>Hello </h1>
            <h1>I am Iris, a virtual Assistant</h1>
            <h1>How may i help you?</h1>
            <div className=" card Live_Chat_wrapper">
              <ui>
                <li>Can i redeem my FB before the original term?</li>
                <li>How do i pa my Credit card bill? </li>
                <li>How can i get my account Statement? </li>
                <li>What is the tenture Deposit? </li>
              </ui>
             
                <button className=" d-grid  position-absolute bottom-0 btn"> Start a New Conversation</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
