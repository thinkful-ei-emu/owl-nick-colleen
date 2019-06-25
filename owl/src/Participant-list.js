import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import './styles/Participant-list.css';




function ParticipantList(props){
  return (
    
      <Participant 
      id = {props.id}
      name = {props.name}
      avatar = {props.avatar}
      inSession = {props.inSession}
      onStage = {props.onStage}
      />
    
  )
}

export default ParticipantList;