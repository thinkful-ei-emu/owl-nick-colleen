import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import './styles/Participant-list.css';




function ParticipantList(props){
  const sortedStore = props.participants.sort((a,b) => (a.inSession > b.inSession) ? -1 : 1);
  
  
  return (
    
    <ul className="participantList">
        {sortedStore.map((participant) => 
          <Participant 
          name= {participant.name}
          id = {participant.id}
          avatar = {participant.avatar}
          inSession = {participant.inSession}
          onStage = {participant.onStage}
          />
        )}
        </ul>
    
  )
}

export default ParticipantList;