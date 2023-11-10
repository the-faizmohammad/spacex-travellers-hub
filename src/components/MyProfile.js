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

  
};

export default MyProfile;
