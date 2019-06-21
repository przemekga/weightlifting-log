import React from 'react'
import PasswordChangeForm from './PasswordReset';
import { withAuthorization } from '../Session';

const Account = () => {
  return (
    <div className="col s12">
      <h5>Account settings</h5>
      <PasswordChangeForm />
    </div>
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);