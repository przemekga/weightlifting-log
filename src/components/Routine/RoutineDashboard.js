import React from "react";
import AddButton from "../UI/AddButton";
import styled from "styled-components";

const WorkoutRoutineStyle = styled.div`
  margin: 1em;
  padding: 10px;
  box-shadow: 0 0 5px 1px #d6d6d6, 7px 6px 20px 1px #d6d6d6;
`;

const RoutineDashboard = () => {
  return (
    <>
      <div className="col-12">
        <WorkoutRoutineStyle>
          <h5>Workout routine 1</h5>
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
        <WorkoutRoutineStyle>
          <h5>Workout routine 2</h5>
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
      <AddButton path={"/add-routine"} className="bottomRight" />
    </>
  );
};

export default RoutineDashboard;
