import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
  fetchRockets,
  reserveRocket,
} from '../redux/rocketsSlice';
import '../styles/Rockets.css'

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
      <div key={data.id} className="rocket-card">
        <div className="img-wrapper">
          <img src={data.flickr_images[0]} alt={data.rocket_name} className="rocket-img" />
        </div>
        <div className="rocket-info">
          <h1 className="rocket-name">{data.rocket_name}</h1>
          <p className="desc">
            {data.reserved && <span className="badge">Reserved</span>}
            {data.description}
          </p>
          <button
            onClick={() => handleReserveRocket(data.id)}
            type="button"
            className={data.reserved ? 'reserved-button' : 'reserve-button'}
          >
            {displayReservedText(data.reserved)}
          </button>
        </div>
      </div>
    ));
  } else if (rocketStatus === 'failed') {
    contentToDisplay = <p>{error}</p>;
  }

  return (
    <div>
      {contentToDisplay}
    </div>
  );
};

export default Rockets;
