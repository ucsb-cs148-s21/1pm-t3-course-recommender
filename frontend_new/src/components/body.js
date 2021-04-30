import React, { Component } from "react";
import CourseForm from "./CourseForm";
import CourseComponent from "./CourseComponent";
import Result from "./Result";

class Body extends Component {
  // body display content according to active tab num
  render() {
    var displayContent = () => {
      var activeTab = this.props.activeTab;
      if (activeTab === 1) {
        return <CourseForm />;
      } else if (activeTab === 2) {
        return <CourseComponent />;
      } else {
        return <Result />;
      }
    };
    return displayContent();
  }
}
export default Body;
