import React, { useEffect, useState } from "react";
import AddButton from "../UI/AddButton";
import WorkoutRoutine from "./WorkoutRoutine";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutines } from "../../store/actions/routineActions";
import { withAuthorization } from "../Session/";

const RoutineDashboard = ({ authUser, firebase }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const routines = useSelector(state => state.routineReducer.routineList);

  useEffect(() => {
    dispatch(fetchRoutines(authUser.uid));
    if (routines.length) {
      setIsLoading(false);
    }
  }, [authUser.uid, routines.length, dispatch]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {routines.map(routine => {
            return <WorkoutRoutine key={routine.id} routine={routine} />;
          })}
        </>
      )}
      <AddButton path={"/add-routine"} className="bottomRight" />
    </>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(RoutineDashboard);
