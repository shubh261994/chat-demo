import React from 'react';
import './index.css';

export default function MessageContent(props) {
    if(props && props.kind === "sent") {
        return (
            <div className="message sent-msg">
                {props.message}
            </div>
        );
    } 
    return (
        <div className="message received-msg">
            {props.message}
        </div>
    );
}