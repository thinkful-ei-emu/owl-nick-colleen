import React from 'react';
import './App.css';
import ParticipantList from './Participant-list';

function App(props) {
  console.log(props.store.participants);
  return (
    <div className="App">
      <header className="App-header">
        {props.store.participants.map((participant) => 
          <ParticipantList 
          name= {participant.name}
          id = {participant.id}
          avatar = {participant.avatar}
          inSession = {participant.inSession}
          onStage = {participant.onStage}
          />
        )}
        
      </header>
    </div>
  );
}

export default App;
