import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { withAuthorization } from "../Session";
import { fetchExercises } from "../../store/actions/exerciseActions";

const WorkoutRoutineStyle = styled.div`
  padding: 10px;
  box-shadow: 0 0 5px 1px #d6d6d6, 7px 6px 20px 1px #d6d6d6;
  margin-bottom: 1em;
`;

const Form = styled.form`
  display: block;
  margin-bottom: 1em;
`;

const OnClickInput = styled.input.attrs(props => ({
  type: "text"
}))`
  color: #444;
`;

const ExerciseLine = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  margin-bottom: -1px;
  border: 1px solid #dcdcdc;
  i {
    font-size: 1.2em;
  }
`

const AddRoutine = ({ authUser }) => {
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exerciseReducer.exercises);

  useEffect(() => {
    dispatch(fetchExercises(authUser.uid));
  }, [authUser.uid, exercises]);

  return (
    <div className="col s12">
      <div className="routineList">
        <WorkoutRoutineStyle>
          <OnClickInput value={"Workout 1"} />
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Exercise</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Chest press</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Deadlift</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Pullup</td>
              </tr>
            </tbody>
          </table>
        </WorkoutRoutineStyle>
      </div>
      <div className="exercise-library">
        <h5>Exercises</h5>
        <ul>
          {exercises.map(item => (
            <ExerciseLine>
              <span>{item.name}</span> <span><i class="fas fa-plus"></i></span>
            </ExerciseLine>
          ))}
        </ul>
      </div>
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AddRoutine);
