import React from 'react';
import './App.css';
import ParticipantList from './Participant-list';
import Stage from './Stage';
import ChatLog from './Chat-log';

function App(props) {
  console.log(props.store.participants);
  return (
    <div className="App">
      <header className="App-header"></header>
        <ParticipantList 
        participants={props.store.participants}
        />
        <div className="stage-display">
        <Stage 
        participants={props.store.participants}/>
         </div>
         <div className="chat-log">
           <ChatLog 
           chatEvents = {props.store.chatEvents}
           participants = {props.store.participants}
           />
    
         </div>
        
    </div>
  );
}

export default App;

