import React from 'react';
import Courses from './Courses';

class Student extends React.Component {
    loopCourses = (num) => {
        var output = [];
        output.push(<p>Student is enrolled in:</p>);
        for (var i = 0; i < num; i++){
            output.push(<p><strong>Course {i}</strong></p>);
        }
        return output;
    }

    render() {
        return <div>
        <p>Student <b>{this.props.name}</b> with student number <b>{this.props.number}</b></p>
        {this.loopCourses(parseInt(this.props.enrolled))}
    </div>
    }  
};

export default Student;