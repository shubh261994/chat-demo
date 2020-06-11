import React from 'react';

import sent from '../../images/sent.svg';
import read from '../../images/read.svg';
import delivered from '../../images/delivered.svg';

export default function MessageStatus(props) {
    if(props.status === "read") {
        return (<img alt="" src={read} />);
    } else if(props.status === "delivered") {
        return (<img alt="" src={delivered} />);
    } else {
        return (<img alt="" src={sent} />);
    }
}