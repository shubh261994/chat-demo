import React from 'react';

import MessageStatus from './MessageStatus/MessageStatus';
import MessageTime from './MessageTime/MessageTime';
import MessageContent from './MessageContent/MessageContent';

export default function Message(props) {
    if(props.data && props.data.kind === "sent") {
        return (
            <div className="message-holder sent-message-holder">
                <MessageContent kind={props.data.kind} message={props.data.message} />
                <MessageTime timestamp={props.data.timestamp} />
                <MessageStatus status={props.data.status} />
            </div>
        );
    } 
    return (
        <div className="message-holder received-message-holder">
            <MessageContent kind={props.data.kind} message={props.data.message} />
            <MessageTime timestamp={props.data.timestamp} />
        </div>
    );

}