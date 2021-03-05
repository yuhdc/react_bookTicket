import React, { Component } from 'react';
import Control from './Control';
import Student from './Student';

class Home extends Component {
    render() {
        return (
            <div>
                <Student />
                <Control />
            </div>
        );
    }
}

export default Home;