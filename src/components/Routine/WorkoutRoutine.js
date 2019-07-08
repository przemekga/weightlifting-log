import React, { useState } from "react";
import styled from "styled-components";
import { Table, TableRow } from "../Table";
import { StyledTable, StyledTableWrapper } from "../Table/Table";
import { millisToMinutesAndSeconds } from "../../utils/utils";

const WorkoutRoutineStyle = styled.div`
  padding: 10px;
  box-shadow: 0 0 5px 1px #d6d6d6, 7px 6px 20px 1px #d6d6d6;
  margin-bottom: 1em;
  > ${StyledTableWrapper} > ${StyledTable} {
    margin-left: 0;
  }
`;
const OnClickInput = styled.input.attrs(props => ({
  type: "text"
}))`
  color: #444;
`;

const WorkoutRoutine = ({ routine, showCompleteBtn = false }) => {
  const [hideSubTable, setHideSubTable] = useState(true);

  const showSets = e => {
    console.log("asda");
    setHideSubTable(!hideSubTable);
  };

  const handleInput = () => {};
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
            <TableRow
              key={exercise.id}
              onClick={showSets}
              hideSubTable={hideSubTable}
            >
              <div>{index + 1}</div>
              <div>{exercise.name}</div>
              <Table
                col={[
                  "30px",
                  "1fr",
                  "1fr",
                  "1fr",
                  `${showCompleteBtn ? "30px" : ""}`
                ]}
              >
                <TableRow>
                  <div>No</div>
                  <div>Weight</div>
                  <div>Reps</div>
                  <div>Rest</div>
                </TableRow>
                {exercise.sets.map((set, index) => (
                  <TableRow key={index}>
                    <div>{index + 1}</div>
                    <div>{set.wgt} kg</div>
                    <div>{set.reps}</div>
                    <div>{millisToMinutesAndSeconds(set.rest)}</div>
                    {showCompleteBtn && (
                      <div>
                        <i class="far fa-check-circle" />
                      </div>
                    )}
                  </TableRow>
                ))}
              </Table>
            </TableRow>
          ))}
        </Table>
      </WorkoutRoutineStyle>
    </div>
  );
};

export default WorkoutRoutine;
