import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {addExercise} from '../../store/actions/exerciseActions'

const Form = styled.form`
  display: block;
  margin-bottom: 1em;
`;

const ExerciseDashboard = () => {
  const [exerciseName, setExerciseName] = useState('');
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exerciseReducer.exercises)

  const handleInput = (e) => {
    setExerciseName(e.target.value)
  }

  const handleAddExercise = (e) => {
    e.preventDefault();
    console.log(e)
    dispatch(addExercise({
      name: exerciseName,
      id: '123'
    }))
    setExerciseName('')
  }

  return (
    <>
      <div className="col s12">
        <h4>Exercise library</h4>
      </div>
      <Form className="col s12" onSubmit={handleAddExercise}>
        <div className="input-field">
          <input
            placeholder="Placeholder"
            id="first_name"
            type="text"
            className="validate"
            value={exerciseName}
            onChange={handleInput}
          />
          <label htmlFor="first_name">Exercise</label>
        </div>
        <button className="btn" type="submit">Add</button>
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
              <tr key={item.id}>
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

export default ExerciseDashboard;
