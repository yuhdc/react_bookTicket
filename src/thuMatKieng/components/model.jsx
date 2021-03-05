import React, { Component } from 'react';
export default class Model extends Component {
    render() {
        console.log('hi', this.props.id);
        return (
            <div className='text-center mb-4'>
                <img src="./asset/model.jpg" alt="" style={{ width: 300, height: 300 }} />
            </div>
        )
    }
}
