import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketsStatus, fetchRockets } from './rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketStatus = useSelector(getRocketsStatus);

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  return (
    <div>
      <h1>Rockets page</h1>
    </div>
  );
};

export default Rockets;
