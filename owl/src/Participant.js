import React from 'react';
import ReactDOM from 'react-dom';
//props: name, avatar, insession, on stage, ID 
function Participant (props) {

   function stageStatus(){
    //sets stageBool if true to 'On stage' if false
    if (props.onStage){
      return 'on stage'
    }else if (props.inSession && !props.onStage){
      return 'in session'
    } 
    return 'left session'
    } 
  
return <li className="participant">
  <img src={props.avatar} alt='participant avatar'></img>
  <h2>{props.name}</h2>
  <div className="stageBool"><p>{stageStatus()}</p></div>
  <div className="dot"></div>
</li>
}

export default Participant;