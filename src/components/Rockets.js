import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
  fetchRockets,
  reserveRocket,
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

  function displayReservedText(currState) {
    return currState ? 'Cancel Reservation' : 'Reserve Rockets';
  }

  function handleReserveRocket(id) {
    dispatch(reserveRocket(id));
  }

  let contentToDisplay = '';
  if (rocketStatus === 'loading') {
    contentToDisplay = <h2>Loading...</h2>;
  } else if (rocketStatus === 'succeeded') {
    contentToDisplay = rockets.map((data) => (
      <div key={data.id}>
        <h2>{data.rocket_name}</h2>
        <p>{data.description}</p>
        <img src={data.flickr_images[0]} alt={data.rocket_name} style={{ width: '100px', height: '100px' }} />
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
