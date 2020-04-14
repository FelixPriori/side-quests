import React from 'react';
import './Profile.scss';
import Button from '../Button/Button';

export default function Profile(props) {
  const { username, first_name, last_name, email, avatar, adventurer } = props.userData[0];
  return (
    <section className='profile'>
      <h2>Your profile</h2>
      <img src={avatar}/>
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
            { adventurer 
              ? <td> Adventurer </td> 
              : <td> Villager </td>
            }
          </tr>
        </tbody>
      </table>
      <Button onClick={props.onEdit} confirm>Edit Account</Button>
    </section>
  );
}