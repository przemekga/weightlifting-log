import React, { Component } from "react";

import { withAuthorization } from "../Session";

class AdminPage extends Component {
  state = {
    loading: false,
    users: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    console.log(this.props.firebase.users());

    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();
      // console.log(snapshot.val());
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }
  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>E-mail</th>
        <th>Username</th>
      </tr>
    </thead>

    <tbody>
      {users.map(user => (
        <tr key={user.uid}>
          <td>
            <p style={{ margin: "0" }}>{user.email}</p>
            <p
              style={{
                fontSize: "0.3em",
                margin: "0",
                fontSize: "bold",
                color: "#ccc"
              }}
            >
              <code style={{
                fontSize: "0.6em",
              }}>ID: {user.uid}</code>
            </p>
          </td>
          <td>{user.username}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const condition = (authUser) => !!authUser && authUser.role === 'admin';

export default withAuthorization(condition)(AdminPage);
