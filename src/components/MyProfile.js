import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../redux/rocketsSlice';
import { getReservedMissionTitles } from '../redux/missionSlice';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(getReservedRockets);
  const rocketStatus = useSelector(getRocketsStatus);
  const reservedMissionTitles = useSelector(getReservedMissionTitles);

  useEffect(() => {
    dispatch(myReservedRockets());
  }, [rocketStatus, dispatch]);

  let renderReserved = '';
  if (rockets.length) {
    renderReserved = rockets.map((data) => (
      <li key={data.id}>
        <span>{data.rocket_name}</span>
      </li>
    ));
  }

  let renderReservedMissions = '';
  if (reservedMissionTitles.length) {
    renderReservedMissions = reservedMissionTitles.map((title) => (
      <li key={title}>
        <span>{title}</span>
      </li>
    ));
  }

  return (
    <div className="result">
      <div className="Box">
        <h2 className="title">My Rockets</h2>
        <table className="Mission-ProfileTable">
          <tbody className="filter-list">
            {renderReserved}
          </tbody>
        </table>
      </div>
      <div className="Box">
        <h2 className="title">My Missions</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {renderReservedMissions || 'No reserved missions.'}
          </tbody>
        </table>
      </div>
      <div className="Box">
        <h2 className="title">My Dragons</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            Coming Soon
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
