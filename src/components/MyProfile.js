import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../redux/rocketsSlice';
import '../styles/MyProfile.css';
const MyProfile = () => (
  <div>
    <h2>My Profile</h2>
  </div>
);

export default MyProfile;
