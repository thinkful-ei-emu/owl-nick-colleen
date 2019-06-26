import React from 'react';
import ReactDOM from 'react-dom';
import ChatItem from "./Chat-item";

function ChatLog(props) {
    const chatItems = props.chatEvents.map(event => {
        const participant = props.participants.find(participant => {
            return participant.id === event.participantId;
        })
        return (<ChatItem
            event={event}
            participant={participant}
        />)
    })
    return <div className="chat-list-container">
        <ul className="chat-list">
            {chatItems}
        </ul>
    </div>
}

export default ChatLog;