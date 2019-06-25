import React, {useState} from "react";
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

const WorkoutRoutine = () => {
  const [routineName, setRoutineName] = useState('Workout 1');

  const handleInput = (e) => {
    setRoutineName(e.target.value);
  }
  return (
    <WorkoutRoutineStyle>
      <OnClickInput value={routineName} onChange={handleInput} />
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
  );
};

export default WorkoutRoutine;
