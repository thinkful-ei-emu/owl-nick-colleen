import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './Participant-list';

const name = "Bob";
const avatar = "https://cdn.britannica.com/s:300x300/55/174255-004-9A4971E9.jpg";
const id = 1;
const inSession = true;
const onStage = false;

describe ('<ParticipantList />', () => {
    it ('renders without crashing', ()=> {
     const div = document.createElement('div');
    ReactDOM.render(<ParticipantList name={name} avatar={avatar} id={id} inSession={inSession} onStage={onStage}/>, div);
     ReactDOM.unmountComponentAtNode(div);
    })
   });