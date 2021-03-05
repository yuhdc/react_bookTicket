import React, { Component } from 'react';
import model from './model.jpg'
export default class Model extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        let glassStyle = {
            width: 180,
            height: 60,
            marginTop: 55,
        }

        return (
            <div className='text-center mb-4 d-flex' style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div className="model" style={{ backgroundImage: `url(${model})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: 300, height: 300 }} >
                    <img src={this.props.glass.url} alt='' style={glassStyle} />
                </div>
            </div>
        )
    }
}
