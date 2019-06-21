import React, { Component } from "react";

import { withFirebase } from "../../Firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <form onSubmit={this.onSubmit} className="col-12">
        <h6>Change password</h6>
        <div className="row">
          <div className="input-field col s12">
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              className="validate"
            />
            <label htmlFor="useremail">New password</label>
          </div>
          <div className="input-field col s12">
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              className="validate"
            />
            <label htmlFor="passwordTwo">Confirm new password</label>
          </div>
          <div className="col s12">
            <button
              disabled={isInvalid}
              className="btn waves-effect waves-light red lighten-2 right"
              type="submit"
              name="signup"
            >
              Change password
              <i className="material-icons right">send</i>
            </button>
          </div>
          <div className="col s12 red-text text-darken-4">
            {error && <p>{error.message}</p>}
          </div>
        </div>
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);
