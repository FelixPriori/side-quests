import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./ClassTabs.scss";

export default function ClassTabs(props) {
  const [key, setKey] = useState("Rogue");

  const allTabs =
    props.classData &&
    props.classData.map((oneClass) => {
      return (
        <Tab
          eventKey={oneClass.name}
          title={oneClass.name}
          className="classTab rounded"
        >
          <div className="content">
            <img
              className="teaserImg"
              alt="avatar"
              src={`/images/Icons/${oneClass.id}.png`}
            />
            <span>
              <h3>{oneClass.name}</h3>
              <p>{oneClass.description}</p>
            </span>
            <br></br>
          </div>
        </Tab>
      );
    });

  return (
    <Tabs
      className="classTabOutline rounded"
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      {allTabs.length ? (
        allTabs
      ) : (
        <div className="alert alert-danger">There are no classes currently</div>
      )}
    </Tabs>
  );
}
