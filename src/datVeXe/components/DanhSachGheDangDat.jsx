import React, { Component } from 'react';
import { connect } from 'react-redux';

class DanhSachGheDangDat extends Component {
    renderGheDangDat = () => {
        return this.props.dsGheDangDat?.map((item, index) => {
            return <h3 className=''>Ghe: so {item.SoGhe}, gia: ${item.Gia}</h3>
        })
    }
    render() {
        return (
            <div>
                <h1 style={{ color: 'goldenrod' }}>Danh Sách Ghế Đã Đặt ({this.props.dsGheDangDat.length}) </h1>
                <div className="list">
                    {this.renderGheDangDat()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dsGheDangDat: state.DSGDDReducer,
    }
}

export default connect(mapStateToProps)(DanhSachGheDangDat);