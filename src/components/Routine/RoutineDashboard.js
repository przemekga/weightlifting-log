import React, { useEffect } from "react";
import AddButton from "../UI/AddButton";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutines } from "../../store/actions/routineActions";
import { withAuthorization } from "../Session/";

const WorkoutRoutineStyle = styled.div`
  margin: 1em;
  padding: 10px;
  box-shadow: 0 0 5px 1px #d6d6d6, 7px 6px 20px 1px #d6d6d6;
`;

const RoutineDashboard = ({ authUser }) => {
  const dispatch = useDispatch();
  const routine = useSelector(state => state.routineReducer.routines);
  const {name, exercises} = routine;
  useEffect(() => {
    dispatch(fetchRoutines(authUser.uid));
  }, [authUser.uid, dispatch]);

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

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(RoutineDashboard);
