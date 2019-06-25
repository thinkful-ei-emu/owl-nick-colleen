import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';




function ParticipantList(props){
  return (
    <ul className="participantList">
      <Participant 
      id = {props.id}
      name = {props.name}
      avatar = {props.avatar}
      inSession = {props.inSession}
      onStage = {props.onStage}
      />
    </ul>
  )
}

export default ParticipantList;