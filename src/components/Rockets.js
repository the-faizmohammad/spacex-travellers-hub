import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
  fetchRockets,
} from '../redux/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectAllRockets);
  const rocketStatus = useSelector(getRocketsStatus);
  const error = useSelector(getRocketsError);

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  let contentToDisplay = '';
  if (rocketStatus === 'loading') {
    contentToDisplay = <h2>Loading...</h2>;
  } else if (rocketStatus === 'succeeded') {
    contentToDisplay = rockets.map((data) => (
      <div key={data.id}>
        <h2>{data.rocket_name}</h2>
        <p>{data.description}</p>
        <hr />
      </div>
    ));
  } else if (rocketStatus === 'failed') {
    contentToDisplay = <p>{error}</p>;
  }

  return (
    <div>
      <h1>Rockets page</h1>
      {contentToDisplay}
    </div>
  );
};

export default Rockets;
