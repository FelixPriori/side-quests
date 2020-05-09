import React from "react";
import PropTypes from "prop-types";

import ClassTabs from "../ClassTabs/ClassTabs";
import "./TeaserPage.scss";

export const TeaserPage = (props) => {
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
};

TeaserPage.propTypes = {
  classesData: PropTypes.array.isRequired,
};
