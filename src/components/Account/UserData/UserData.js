import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withFirebase } from "../../Firebase";
import { setUserData } from "../../../store/actions/authActions";

const UserData = ({ firebase }) => {
  const dispatch = useDispatch();
  // const profileData = useSelector(state => {
  //   return {
  //     displayName: state.accountReducer.displayName,
  //     photoURL: state.accountReducer.photoURL
  //   };
  // });

  const profileData = useSelector(state => {
    return {
      displayName: state.authReducer.authUser.displayName,
      photoURL: state.authReducer.authUser.photoURL
    };
  });

  useEffect(() => {
    console.log(profileData);
  });

  const onChange = e => {
    const property = e.target.name;
    dispatch(
      setUserData({
        ...profileData,
        [property]: e.target.value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    firebase.doUpdateProfile(profileData)
  };

  const isInvalid = profileData.displayName === "";

  return (
    <form onSubmit={onSubmit} className="col-12">
      <h6>User Data</h6>
      <div className="row">
        <div className="input-field col s12">
          <input
            name="displayName"
            value={profileData.displayName}
            onChange={onChange}
            type="text"
            className="validate"
            id="displayName"
          />
          <label htmlFor="displayName">Your name</label>
        </div>
        <div className="input-field col s12">
          <input
            name="photoURL"
            value={profileData.photoURL}
            onChange={onChange}
            type="text"
            className="validate"
            id="photo"
          />
          <label htmlFor="photo">Photo url</label>
        </div>
        <div className="col s12">
          <button
            disabled={isInvalid}
            className="btn waves-effect waves-light red lighten-2 right"
            type="submit"
            name="signup"
          >
            Save
            <i className="material-icons right">send</i>
          </button>
        </div>
        <div className="col s12 red-text text-darken-4">
          {/* {profile.error && <p>{profile.error.message}</p>} */}
        </div>
      </div>
    </form>
  );
};

export default withFirebase(UserData);
