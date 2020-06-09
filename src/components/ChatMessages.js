import React, {Component} from 'react';

import Message from './Message';

const DATA =  [
    {
        message: "Hello",
        type: "text",
        status: "read",
        timestamp: "2020-06-04T16:23:21.326Z",
        kind: "sent"
    },
    {
        message: "Hi There! How can I help you?",
        type: "text",
        status: "read",
        timestamp: "2020-06-04T16:24:21.326Z",
        kind: "sent"
    },
    {
        message: "Hello! Can you please send my bank statement?",
        type: "text",
        status: "sent",
        timestamp: "2020-06-04T16:26:21.326Z",
        kind: "received"
    },
    {
        message: "File is being uploaded, you can download it and send me back with signature.",
        type: "text",
        status: "sent",
        timestamp: "2020-06-04T16:27:21.326Z",
        kind: "sent"
    },
    {
        message: "",
        type: "image",
        status: "delivered",
        timestamp: "2020-06-04T16:28:21.326Z",
        kind: "sent"
    },
]

export default class ChatHolder extends Component {
    render() {
        return (
            <div className="chat-msgs-holder">
                <div className="chat-msgs-date">4 June</div>
                <div className="messages">
                    { DATA.map((msg, index) => {
                        return (
                            <Message data={msg} key={index} />
                        );
                    })}
                </div>
            </div>
        );
    }
}