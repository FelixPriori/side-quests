import React from "react";
import PropTypes from "prop-types";

import ClassTabs from "../ClassTabs/ClassTabs";
import "./TeaserPage.scss";

<<<<<<< HEAD
export default function TeaserPage(props) {
=======
export const TeaserPage = (props) => {
>>>>>>> bae2b659c0707543c91119281a222ecda2c915d3
  return (
    <section className="quest-selection">
      <section className="select-class">
        <img
          className="titleImage"
          alt="titleImage"
          src="/images/titleArt.png"
        ></img>

        <div className="content"></div>
        <h4>Sign in or Register to help people in need!</h4>
        <br></br>
        <ClassTabs classData={props.classesData} />
      </section>
    </section>
  );
<<<<<<< HEAD
}
=======
};

TeaserPage.propTypes = {
  classesData: PropTypes.array.isRequired,
};
>>>>>>> bae2b659c0707543c91119281a222ecda2c915d3
