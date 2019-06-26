import React from 'react';
import ReactDOM from 'react-dom';

function ChatItem(props) {
    console.log(props);
    switch (props.event.type) {
        case 'thumbs-down':
            return (<li>
                <span>{props.participant.name}</span>
                <p>thumbs down</p>
            </li>)
        case 'raise-hand':
            return (<li>
                <span>{props.participant.name}</span>
                <p>raise hand</p>
            </li>)
        case 'clap':
            return (<li>
                <span>{props.participant.name}</span>
                <p>clap</p>
            </li>)
        case 'join-stage':
            return (<li>
                <span>{props.participant.name}</span>
                <p>join</p>
            </li>)
        case 'leave-stage':
            return (<li>
                <span>{props.participant.name}</span>
                <p>leave</p>
            </li>)
        case 'thumbs-up':
            return (<li>
                <span>{props.participant.name}</span>
                <p>thumbs up</p>
            </li>)
        case 'join':
            return (<li>
                <span>{props.participant.name}</span>
                <p>joined</p>
            </li>)
        case 'leave':
            return (<li>
                <span>{props.participant.name}</span>
                <p>left</p>
            </li>)
        case 'message':
        default:
            return (<li>
                <img src={props.participant.avatar} alt="avatar"></img>
                <p>{props.event.message}</p>
            </li>)

    }

}



export default ChatItem;