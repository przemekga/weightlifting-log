import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, fetchExercises } from "../../store/actions/exerciseActions";
import M from "materialize-css";
import {withAuthorization} from '../Session'
const Form = styled.form`
  display: block;
  margin-bottom: 1em;
`;

const ExerciseDashboard = ({authUser}) => {
  const [exerciseName, setExerciseName] = useState("");
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exerciseReducer.exercises);

  useEffect(() => {
    M.updateTextFields();
    console.log(authUser.uid);
    dispatch(fetchExercises(authUser.uid));
  }, [authUser.uid]);

  const handleInput = e => {
    setExerciseName(e.target.value);
  };

  const handleAddExercise = e => {
    e.preventDefault();
    dispatch(
      addExercise({
        name: exerciseName,
        id: "123"
      })
    );
    setExerciseName("");
  };

  return (
    <>
      <div className="col s12">
        <h4>Exercise library</h4>
      </div>
      <Form className="col s12" onSubmit={handleAddExercise}>
        <div className="input-field">
          <input
            placeholder="Placeholder"
            id="exercise"
            type="text"
            className="validate"
            value={exerciseName}
            onChange={handleInput}
            autoComplete="off"
          />
          <label htmlFor="exercise">Exercise</label>
        </div>
        <div style={{ textAlign: "right" }}>
          <button className="btn" type="submit">
            Add
          </button>
        </div>
      </Form>
      <div className="col s12">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Exercise</th>
            </tr>
          </thead>

          <tbody>
            {exercises.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ExerciseDashboard);
