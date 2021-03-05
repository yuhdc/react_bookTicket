import React, { Component } from 'react'
import GlassItem from './glassItem';
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
export default class GlassList extends Component {
    renderListItem = () => {
        return arrProduct.map((item, index) => {
            return (
                <div key={index} className="d-inline" style={{ flexGrow: 1 }}>
                    <GlassItem item={item} />
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
