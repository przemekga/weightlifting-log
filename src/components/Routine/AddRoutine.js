import React from "react";
import styled from "styled-components";

const WorkoutRoutineStyle = styled.div`
  padding: 10px;
  box-shadow: 0 0 5px 1px #d6d6d6, 7px 6px 20px 1px #d6d6d6;
  margin-bottom: 1em;
`;

const Form = styled.form`
  display: block;
  margin-bottom: 1em;
`;

const AddRoutine = () => {
  return (
    <div className="col s12">
      <div className="routineList">
        <WorkoutRoutineStyle>
          <h5>Workout routine 1 [edit]</h5>
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
          <button className="btn">Add exercise</button>
        </WorkoutRoutineStyle>
      </div>
    </div>
  );
};

export default AddRoutine;
