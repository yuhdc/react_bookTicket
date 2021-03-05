import React, { Component } from 'react'

export default class GlassList extends Component {
    renderListItem = () => {
        return this.props.arrProduct?.map((item, index) => {
            return (
                <div key={index} className="d-inline" style={{ flexGrow: 1 }}>
                    <button className='btn' onClick={() => this.props.handleClick(item)}>
                        <img src={item.url} alt={item.desc} style={{ width: 70, height: 30, cursor: 'pointer', marginBottom: 20, border: 'black solid 1px', padding: 5 }} />
                        <p>Price: {item.price}</p>
                    </button>
                </div>
            );
        });
    };

    render() {
        return (
            <>
                {this.renderListItem()}
            </>
        )
    }
}
