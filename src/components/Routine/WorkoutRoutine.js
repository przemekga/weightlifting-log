import React, { useState } from "react";
import styled from "styled-components";

const WorkoutRoutineStyle = styled.div`
  padding: 10px;
  box-shadow: 0 0 5px 1px #d6d6d6, 7px 6px 20px 1px #d6d6d6;
  margin-bottom: 1em;
`;
const OnClickInput = styled.input.attrs(props => ({
  type: "text"
}))`
  color: #444;
`;

const WorkoutRoutine = ({ routine }) => {
  const handleInput = e => {};
  return (
    <div className="col s12">
      <WorkoutRoutineStyle>
        <OnClickInput value={routine.name} onChange={handleInput} />
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Exercise</th>
            </tr>
          </thead>

          <tbody>
            {routine.exercises.map((exercise, index) => (
              <tr key={exercise.id}>
                <td>{index + 1}</td>
                <td>{exercise.name}</td>
                <tr>asdsad</tr>
              </tr>
            ))}
          </tbody>
        </table>
      </WorkoutRoutineStyle>
    </div>
  );
};

export default WorkoutRoutine;
