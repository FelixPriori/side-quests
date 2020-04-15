import React from 'react';
import './Loading.scss';
import Spinner from 'react-bootstrap/Spinner';

export default function Loading(props) {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <Spinner animation="border" role="status" >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}