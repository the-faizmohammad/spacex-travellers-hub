import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../redux/rocketsSlice';
import { getReservedMissionTitles } from '../redux/missionSlice';
import '../styles/MyProfile.css';
import { reserveDragon } from '../redux/dragonSlice';


const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(getReservedRockets);
  const rocketStatus = useSelector(getRocketsStatus);
  const reservedMissionTitles = useSelector(getReservedMissionTitles);

  let renderReservedDragons = '';
  if (reservedDragons.length) {
    renderReservedDragons = reservedDragons.map((dragon) => (
      <li key={dragon.id}>
        <span>{dragon.name}</span>
      </li>
    ));
  }

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
            {renderReserved || 'No Reserved Rockets'}
          </tbody>
        </table>
      </div>
      <div className="Box">
        <h2 className="title">My Missions</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {renderReservedMissions || 'No Reserved Missions.'}
          </tbody>
        </table>
      </div>
      <div className="Box">
        <h2 className="title">My Dragons</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {renderReserveDragon || 'No Reserved Dragons.'}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
