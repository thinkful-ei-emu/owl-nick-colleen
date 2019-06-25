import React from 'react';
import './App.css';
import ParticipantList from './Participant-list';

function App(props) {
  console.log(props.store.participants);
  const sortedStore = props.store.participants.sort((a,b) => (a.inSession > b.inSession) ? -1 : 1);
  return (
    <div className="App">
      <header className="App-header">
        {sortedStore.map((participant) => 
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
