import React from 'react';
import ReactDOM from 'react-dom';

function StageItem(props){
    if (props.onStage){
    return <div>
        <img src={props.avatar} alt="avatar"></img>
        <p>{props.name}</p>
        </div>
    } return '';
}

export default StageItem;