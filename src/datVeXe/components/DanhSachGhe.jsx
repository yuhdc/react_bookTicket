import React, { Component } from 'react';
import GheItem from './GheItem';
import { connect } from 'react-redux';

class DanhSachGhe extends Component {


    renderGhe = () => {
        return this.props.gheInfo.map((item, index) => {
            return (
                <div className="col-3">
                    <GheItem item={item} key={index} />
                </div>
            )
        })
    }


    render() {
        return (
            <div className="row">
                <div className="col-12 bg-secondary py-2" style={{ fontSize: '30px' }}>Tài xế</div>
                <div className="row">
                    {this.renderGhe()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gheInfo: state.DanhSachGheReducer,
    }
}

export default connect(mapStateToProps)(DanhSachGhe);