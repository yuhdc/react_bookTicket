import React, { Component } from 'react';
import GlassList from './glassList';
import Model from './model';

export default class GlassItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idOfChoose: -1,
        }
    }

    handleClick = (id) => {
        this.state.idOfChoose = id;
        // this.setState(this.state);
        console.log('key', this.state.idOfChoose);
        < Model id={id} />
    }

    render() {
        const { url, name, desc, price, id } = this.props.item;
        return (
            <button className='btn' onClick={() => this.handleClick(id)}>
                <img src={url} alt={desc} style={{ width: 70, height: 30, cursor: 'pointer', marginBottom: 20, border: 'black solid 1px', padding: 5 }} />
                <p>Price: {price}</p>
            </button>
        )
    }
}
