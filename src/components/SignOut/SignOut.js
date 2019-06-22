import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => {
  const handleClick = (e) => {
    e.preventDefault();
    firebase.doSignOut();
  }
  return (
    <a href="/" onClick={handleClick}>
      Sign Out
    </a>
  )
}

export default withFirebase(SignOutButton);