import React, { useState } from "react";
import styled from "styled-components";
import { Table, TableRow } from "../Table";

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
        <Table col={["30px", "1fr"]}>
          <TableRow>
            <div>No.</div>
            <div>Exercise</div>
          </TableRow>

          {routine.exercises.map((exercise, index) => (
            <TableRow key={exercise.id}>
              <div>{index + 1}</div>
              <div>{exercise.name}</div>
            </TableRow>
          ))}
        </Table>
      </WorkoutRoutineStyle>
    </div>
  );
};

export default WorkoutRoutine;
