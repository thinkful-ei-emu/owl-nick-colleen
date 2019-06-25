import React from 'react';
import './styles/Participant.css';
import ReactDOM from 'react-dom';
//props: name, avatar, insession, on stage, ID 
function Participant (props) {

   function stageStatus(){
    //sets stageBool if true to 'On stage' if false
    if (props.onStage){
      return 'on stage'
    } else if (props.inSession && !props.onStage){
      return 'in session'
    } 
    return 'left session'
    } 

    function dotStatus(){
      if (props.inSession || props.onStage){
        return "dot"
      }
      return "dot-grey"
    }
  
return <li className="participant">
  <img src={props.avatar} alt='participant avatar' className="avatar"></img>
  <div className="person-status-contain"><h2 className="participant-name">{props.name}</h2>
  <p className={dotStatus()}>{stageStatus()}</p></div>
</li>
}

export default Participant;