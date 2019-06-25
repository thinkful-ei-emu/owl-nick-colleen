import React from 'react';
import './App.css';
import ParticipantList from './Participant-list';
import Stage from './Stage';

function App(props) {
  console.log(props.store.participants);
  const sortedStore = props.store.participants.sort((a,b) => (a.inSession > b.inSession) ? -1 : 1);
  return (
    <div className="App">
      <header className="App-header"></header>
      <ul className="participantList">
        {sortedStore.map((participant) => 
          <ParticipantList 
          name= {participant.name}
          id = {participant.id}
          avatar = {participant.avatar}
          inSession = {participant.inSession}
          onStage = {participant.onStage}
          />
        )}
        </ul>
        <div className="stage-display">
        {props.store.participants.map((participant) =>
        <Stage 
         name = {participant.name}
         avatar = {participant.avatar}
         onStage = {participant.onStage}
         />)}
         </div>
        
    </div>
  );
}

export default App;
