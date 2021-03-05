

import React, { Component } from 'react'
import GlassList from '../components/glassList'
import Model from '../components/model'
// import background from '../../../public/asset/background.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container" style={{ backgroundImage: "url(" + "./asset/background.jpg" + ")", width: '100%', height: '100%', opacity: 1 }}>
                    <div className="d-block">
                        <Model />
                    </div>
                    <div className="d-flex">
                        <GlassList />
                    </div>
                </div>
            </>
        )
    }
}
