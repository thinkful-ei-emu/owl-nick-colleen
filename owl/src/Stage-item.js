import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Stage.css'

function StageItem(props){
    if (props.onStage){
    return <div className="stage-item">
        <header>{props.name}</header>
        <img src={props.avatar} alt="avatar"></img>
        </div>
    } return '';
}

export default StageItem;