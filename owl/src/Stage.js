import React from 'react';
import ReactDOM from 'react-dom';
import StageItem from './Stage-item';
import './styles/Stage.css';

function Stage(props){
    return ( 
        <div className="stage-participant">
            <StageItem name={props.name} avatar={props.avatar} onStage={props.onStage}/>
        </div>
    )
}

export default Stage;