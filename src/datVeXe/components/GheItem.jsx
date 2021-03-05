import React, { Component } from 'react';
import { connect } from 'react-redux';

class GheItem extends Component {
    cSeat = (seat) => {
        return this.props.gheInfo?.map((item, index) => {
            if (item.SoGhe === seat) {
                this.props.dispatch({ type: 'DISPATCH_CHOSENSEAT', payload: item });
            }
        })
    }

    render() {
        const { item, key } = this.props;
        let cssgheDaDat = 'btn-secondary';
        let disabled = false;
        //ghe bi nguoi khac dat roi
        if (item.TrangThai) {
            cssgheDaDat = 'btn-danger';
            disabled = true;
        }

        //ghe dang dat
        const indexGheDangDat = this.props.dsGheDangDat.findIndex(gheDangDat => gheDangDat.SoGhe === item.SoGhe);
        if (indexGheDangDat !== -1) {
            cssgheDaDat = 'btn-success';
        }

        return (
            <>
                <button key={key} disabled={disabled} className={`btn ${cssgheDaDat} m-2`} style={{ width: 50, height: 50 }} onClick={() => this.cSeat(item.SoGhe)}>
                    {item.SoGhe}
                </button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        gheInfo: state.DanhSachGheReducer,
        dsGheDangDat: state.DSGDDReducer,
    }
}

export default connect(mapStateToProps)(GheItem);
