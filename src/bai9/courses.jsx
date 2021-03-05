import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from './course';
import coursesItem from './coursesItem'

class Courses extends Component {
    renderCourseList = () => {
        return this.props.courseList?.map((course, index) => {
            return (
                <div className='col-lg-4 col-sm-12' key={index}>
                    <coursesItem course={course} />
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                hello
            </div>
        );
    }
    componentDidMount() {
        this.props.dispatch(fetchCourses);
    }
}

const mapStateToProps = (state) => {
    return {
        courseList: state.courseReducer,
    };
};

export default connect(mapStateToProps)(Courses);