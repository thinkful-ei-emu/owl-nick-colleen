import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';

const name = 'Bob';
const avatar = 'https://cdn.britannica.com/s:300x300/55/174255-004-9A4971E9.jpg';
const onStage = false;

describe ('<ParticipantList />', () => {
    it ('renders without crashing', ()=> {
     const div = document.createElement('div');
    ReactDOM.render(<Stage name={name} avatar={avatar} onStage={onStage}/>, div);
     ReactDOM.unmountComponentAtNode(div);
    })
   });