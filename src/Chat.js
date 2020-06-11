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
                <form className="rcw-sender" onSubmit={()=>{}}>
                    <input
                      type="text"
                      className="rcw-new-message"
                      name="message"
                      placeholder={'ded'}
                      autoComplete="off"
                      onChange={this.onMessageChange}
                    />
                    <img alt="" src={attach} />
                    <button type="submit" className="rcw-send">
                        <img src={send} className="rcw-send-icon" alt="" />
                    </button>
                </form>
            </div>
        </div>
            </div>
        );
    }
}