import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { withAuthorization } from "../Session";
import { fetchExercises } from "../../store/actions/exerciseActions";
import WorkoutRoutine from "./WorkoutRoutine";

const Form = styled.form`
  display: block;
  margin-bottom: 1em;
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
`;

const AddRoutine = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exerciseReducer.exercises);
  const uid = useSelector(state => state.authReducer.authUser.uid);

  useEffect(() => {
    dispatch(fetchExercises(uid));
  }, [uid, exercises.length, dispatch]);

  return (
    <div className="col s12">
      <div className="routineList">
        <WorkoutRoutine />
      </div>
      <div className="exercise-library">
        <h5>Exercises</h5>
        <ul>
          {exercises.map(item => (
            <ExerciseLine key={item.id}>
              <span>{item.name}</span>{" "}
              <span>
                <i className="fas fa-plus" />
              </span>
            </ExerciseLine>
          ))}
        </ul>
      </div>
    </div>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AddRoutine);
