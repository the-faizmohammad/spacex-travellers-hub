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
        <p>
          {data.reserved && (
            <span
              style={{
                marginRight: 10,
                border: '1px solid',
                padding: '2px 4px',
                backgroundColor: 'aqua',
                color: 'white',
              }}
            >
              Reserved
            </span>
          )}
        </p>
        <button
          onClick={() => handleReserveRocket(data.id)}
          type="button"
          style={{
            margin: '5px',
            padding: '5px 10px',
            backgroundColor: data.reserved ? 'red' : 'green',
            color: 'black',
          }}
        >
          {displayReservedText(data.reserved)}
        </button>
        {' '}
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
