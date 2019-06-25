import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';

const name = "Bob"
const avatar = "https://cdn.britannica.com/s:300x300/55/174255-004-9A4971E9.jpg"
const inSession = true
const onStage = false

describe ('<Participant />', () => {
 it ('renders without crashing', ()=> {
  const div = document.createElement('div');
  ReactDOM.render(<Participant name={name} avatar ={avatar} inSession={inSession} onStage = {onStage}/>, div);
  ReactDOM.unmountComponentAtNode(div);
 })
});