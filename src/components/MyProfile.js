import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../redux/rocketsSlice';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(getReservedRockets);
  const rocketStatus = useSelector(getRocketsStatus);

  

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
      
    </div>
  );
};

export default MyProfile;
