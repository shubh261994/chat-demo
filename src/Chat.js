import React, {Component} from 'react';

import './css/temp.css';
import send from './images/send.svg';
import attach from './images/attach.svg';
import Header from './components/Header';
import ChatMessages from './components/ChatMessages';

export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    onMessageChange = (ev) => {
        this.setState({message: ev.target.value});
    }

    onSendClick = (ev) => {
        ev.preventDefault();
    }

    render() {
        return (
            <div className="chat-holder">
                <Header />
                <ChatMessages />
                <div className="msg-send-holder">
                    <div className="msg-input-holder">
                        <input className="msg-input" onChange={this.onMessageChange} />
                        <img src={attach} />
                    </div>
                    <button className="send-btn" onClick={this.onSendClick}>
                        <img src={send} />
                    </button>
                </div>
            </div>
        );
    }
}