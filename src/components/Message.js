import React from 'react';

import sent from '../images/sent.svg';
import read from '../images/read.svg';
import delivered from '../images/delivered.svg';

function formatAMPM(date) {
    if(!date) {
        return "";
    }

    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export default function Message(props) {
    const getStatusImg = () => {
        if(props.data.status === "read") {
            return (<img src={read} />);
        } else if(props.data.status === "delivered") {
            return (<img src={delivered} />);
        } else {
            return (<img src={sent} />);
        }
    }
    if(props.data && props.data.kind === "sent") {
        return (
            <div className="message sent-msg">
                {props.data.message}
                <span className="message-time">{getStatusImg()} {formatAMPM(props.data.timestamp)}</span>
            </div>
        );
    } 
    return (
        <div className="message received-msg">
            {props.data.message}
            <span className="message-time">
                {formatAMPM(props.data.timestamp)}
            </span>
        </div>
    );

}