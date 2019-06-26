import React from 'react';
import ReactDOM from 'react-dom';
import StageItem from './Stage-item';
import './styles/Stage.css';

function Stage(props){
    return ( 
        <div className="stage-participant">
            {props.participants.map((participant) =>
        <StageItem
         name = {participant.name}
         avatar = {participant.avatar}
         onStage = {participant.onStage}
         />)}
        </div>
    )
}

export default Stage;