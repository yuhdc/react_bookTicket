import React, { Component } from 'react';
import DanhSachGhe from '../../components/DanhSachGhe';
import DanhSachGheDangDat from '../../components/DanhSachGheDangDat';

class Home extends Component {
    render() {
        return (
            <div className='container'>
                <h1>ĐẶT VÉ XE HÃNG CYBERSOFT</h1>
                <div className="row">
                    <div className="col-6">
                        <DanhSachGhe />
                    </div>
                    <div className="col-6">
                        <DanhSachGheDangDat />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;