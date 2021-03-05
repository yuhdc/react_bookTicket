import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

class Student extends PureComponent {

    render() {
        const { name, age } = this.props.student;
        return (
            <div>
                <h1>tên: {name}</h1>
                <h1>age: {age}</h1>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        student: state.nStudent
    }
}

export default connect(mapStatetoProps)(Student);