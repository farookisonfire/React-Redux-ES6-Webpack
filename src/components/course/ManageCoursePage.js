import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render() {
    return (
        <CourseForm
          allAuthors={[]}
          course={this.state.course}
          errors={this.state.errors} />

    );
  }
}

ManageCoursePage.PropTypes = {
  course: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  return {
    course
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
