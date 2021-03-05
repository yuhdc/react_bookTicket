

import React, { Component } from 'react'
import GlassList from '../components/glassList'
import Model from '../components/model'
// import background from '../../../public/asset/background.jpg'
let arrProduct = [

    { id: 1, price: 30, name: 'GUCCI G8850U', url: './asset/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 2, price: 50, name: 'GUCCI G8759H', url: './asset/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 3, price: 30, name: 'DIOR D6700HQ', url: './asset/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 4, price: 30, name: 'DIOR D6005U', url: './asset/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 5, price: 30, name: 'PRADA P8750', url: './asset/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 6, price: 30, name: 'PRADA P9700', url: './asset/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 7, price: 30, name: 'FENDI F8750', url: './asset/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 8, price: 30, name: 'FENDI F8500', url: './asset/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

    { id: 9, price: 30, name: 'FENDI F4300', url: './asset/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            glassItem: {
                id: 1,
                price: 30,
                name: 'GUCCI G8850U',
                url: './asset/v1.png',
                desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
            }
        }
    }

    handleClick = (item) => {
        this.setState({ glassItem: item })
        console.log('state', this.state.glassItem);
    }

    render() {
        return (
            <div className="container" style={{ backgroundImage: "url(" + "./asset/background.jpg" + ")", width: '100%', height: '100%', opacity: 1 }}>
                <div className="d-block">
                    <Model glass={this.state.glassItem} />
                </div>
                <div className="d-flex">
                    <GlassList arrProduct={arrProduct} handleClick={this.handleClick} />
                </div>
            </div>
        )
    }
}
