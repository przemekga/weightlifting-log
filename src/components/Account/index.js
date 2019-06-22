import React from 'react'
import PasswordChangeForm from './PasswordReset';
import UserData from './UserData/UserData'

import { withAuthorization } from '../Session';

const Account = () => {
  return (
    <div className="col s12">
      <h5>Account settings</h5>
      <UserData />
      <PasswordChangeForm />
    </div>
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);