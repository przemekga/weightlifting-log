import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addExercise,
  fetchExercises
} from "../../store/actions/exerciseActions";
import M from "materialize-css";
import { withAuthorization } from "../Session";

const Form = styled.form`
  display: block;
  margin-bottom: 1em;
`;

const ExerciseData = styled.td`
  p {
    margin: 0;
  }
`;

const ExerciseDashboard = ({ authUser }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exerciseReducer.exercises);

  useEffect(() => {
    M.updateTextFields();
    console.log(authUser.uid);
    dispatch(fetchExercises(authUser.uid));
    if (exercises.length) {
      setIsLoading(false);
    }
  }, [authUser.uid, exercises]);

  const handleInput = e => {
    setExerciseName(e.target.value);
  };

  const handleAddExercise = e => {
    e.preventDefault();
    dispatch(
      addExercise({
        name: exerciseName,
        desc: "Description..."
      })
    );
    setExerciseName("");
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
                  <th width="10%">No.</th>
                  <th>Exercise</th>
                </tr>
              </thead>

              <tbody>
                {exercises.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <ExerciseData>
                      <details>
                        <summary>{item.name}</summary>
                        <p>{item.desc}</p>
                      </details>
                    </ExerciseData>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ExerciseDashboard);
