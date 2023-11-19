import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../redux/Rockets/rocketsSlice';
import { getReservedMissionTitles } from '../redux/Mission/missionSlice';
import '../styles/MyProfile.css';
import { getReservedDragons } from '../redux/Dragon/dragonSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(getReservedRockets);
  const rocketStatus = useSelector(getRocketsStatus);
  const reservedMissionTitles = useSelector(getReservedMissionTitles);
  const dragons = useSelector(getReservedDragons);

  useEffect(() => {
    dispatch(myReservedRockets());
  }, [rocketStatus, dispatch]);

  const joinedMissions = reservedMissionTitles.filter((title) => title);

  const reservedRockets = rockets.filter((data) => data);

  const reservedDragons = dragons.filter((data) => data);

  return (
    <div className="result">
      <div className="Box">
        <h2 className="title">My Rockets</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {reservedRockets.length > 0 ? (
              reservedRockets.map((data) => (
                <li className="filter-list" key={data.id}>
                  <span>{data.rocket_name}</span>
                </li>
              ))
            ) : (
              <tr>
                <td>No Reserved Rockets.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="Box">
        <h2 className="title">My Missions</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {joinedMissions.length > 0 ? (
              joinedMissions.map((title) => (
                <li className="filter-list" key={title}>
                  <span>{title}</span>
                </li>
              ))
            ) : (
              <tr>
                <td>No Joined Missions.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="Box">
        <h2 className="title">My Dragons</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {reservedDragons.length > 0 ? (
              reservedDragons.map((data) => (
                <li className="filter-list" key={data.id}>
                  <span>{data.name}</span>
                </li>
              ))
            ) : (
              <tr>
                <td>No Reserved Dragons.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
