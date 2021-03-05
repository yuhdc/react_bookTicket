import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreate from './ActionCreator';
import { SET_STUDENT } from "./contanst";

class Control extends Component {


    changeAge = () => {
        this.props.student.age++;
        this.props.dispatch(actionCreate(SET_STUDENT, this.props.student))
    }

    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={() => this.changeAge()}>+ thêm 1 tuối</button>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        student: state.nStudent
    }
}

export default connect(mapStatetoProps)(Control);