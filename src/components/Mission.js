import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Mission.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { fetchMissions, reserveMission } from '../redux/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.data);
  const isLoading = useSelector((state) => state.mission.isloading);
  const [statusText] = useState('Not a member');

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (id) => {
    dispatch(reserveMission({ id }));
  };

  return (
    <div>
      <h2>Mission</h2>
      {isLoading ? (
        <p>Loading missions...</p>
      ) : (
        <div className="table-container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {missions && missions.length > 0 ? (
                missions.map((mission) => (
                  <tr key={mission.mission_id}>
                    <td>{mission.mission_name}</td>
                    <td>{mission.description}</td>
                    <td>
                      <ToggleButton
                        className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant={mission.reserved ? 'info' : 'dark'}
                      >
                        {mission.reserved ? 'Active member' : statusText}
                      </ToggleButton>
                    </td>
                    <td>
                      <ButtonGroup className="mb-2">
                        <ToggleButton
                          id="toggle-check"
                          type="checkbox"
                          variant={mission.reserved ? 'outline-danger' : 'outline-dark'}
                          onClick={() => handleJoinMission(mission.mission_id)}
                        >
                          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                        </ToggleButton>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No missions available.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Mission;
