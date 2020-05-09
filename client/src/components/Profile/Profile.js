import React from "react";
import PropTypes from "prop-types";

import "./Profile.scss";
import Button from "../Button/Button";
import BadgeBox from "../BadgeBox/BadgeBox";

export const Profile = (props) => {
  const {
    username,
    first_name,
    last_name,
    email,
    adventurer,
    avatar,
    bio,
  } = props.userData;
  const { userBadges } = props.userBadges;

  return (
    <section className="profile">
      <h2>Your profile</h2>
      <img alt="avatar" src={avatar} />
      <table className="table table-striped table-bordered">
        <tbody>
          <tr>
            <td className="start">Username</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td className="start">First Name</td>
            <td>{first_name}</td>
          </tr>
          <tr>
            <td className="start">Last Name</td>
            <td>{last_name}</td>
          </tr>
          <tr>
            <td className="start">Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td className="start">Password</td>
            <td>**************</td>
          </tr>
          <tr>
            <td className="start">Account Type</td>
            {adventurer ? <td> Adventurer </td> : <td> Villager </td>}
          </tr>
          <tr>
            <td className="start">Bio</td>
            <td>{bio || "Edit your profile to add your bio!"}</td>
          </tr>
          {adventurer && (
            <tr>
              <td className="start">Badges</td>
              <td> {<BadgeBox badges={userBadges} />} </td>
            </tr>
          )}
        </tbody>
      </table>
      <Button onClick={props.onEdit} confirm>
        Edit Account
      </Button>
    </section>
  );
};

Profile.propTypes = {
  userData: PropTypes.exact({
    username: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    adventurer: PropTypes.string,
    avatar: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  userBadges: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
};
