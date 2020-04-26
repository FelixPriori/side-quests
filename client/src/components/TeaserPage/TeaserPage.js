import React from "react";
import ClassTabs from "../ClassTabs/ClassTabs";
import "./TeaserPage.scss";




export default function TeaserPage(props) {

  return (
    <section className="quest-selection">
      <section className="select-class">
        {/* Title art img */}

        <div className="content">
        </div>
        <h4>Sign in or Register to help people in need!</h4>
        <br></br>
        <ClassTabs classData={props.state.classesData} />
      </section>
    </section>

  );
}