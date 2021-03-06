import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addExercise,
  deleteExercise,
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

const ExerciseDashboard = ({ authUser, firebase }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exerciseReducer.exercises);

  useEffect(() => {
    M.updateTextFields();
    dispatch(fetchExercises(authUser.uid));
    if (exercises.length) {
      setIsLoading(false);
    }
  }, [exercises.length, dispatch, authUser]);

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

  const handleDeleteExercise = id => {
    dispatch(deleteExercise(id));
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
                  <th width="75%">Exercise</th>
                  <th width="15%" />
                </tr>
              </thead>

              <tbody>
                {exercises.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <ExerciseData>{item.name}</ExerciseData>
                    <td>
                      <i
                        onClick={() => handleDeleteExercise(item.id)}
                        className="far fa-trash-alt"
                      />
                    </td>
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
