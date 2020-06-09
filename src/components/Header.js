import React, {Component} from 'react';

import back from '../images/back.svg';
import video from '../images/video.svg';
import call from '../images/call.svg';

export default class Header extends Component {
	onBackClick = (ev) => {
		console.log("hello");
	}

    render() {
        return (
            <header className="header">
            	<img src={back} onClick={this.onBackClick} />
                <h1 className="header-title">Agent Vinod</h1>
                <img src={call} className="header-action" />
                <img src={video} className="header-action" />
            </header>
        );
    }
}