/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Mission.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { fetchMissions } from '../redux/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission.data);
  const isLoading = useSelector((state) => state.mission.isloading);
  const [checked, setChecked] = useState(false);
  const [statusText] = useState('Not a member');

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
                <th>description</th>
                <th>Status</th>
                <th>button</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                  <td>{mission.description}</td>
                  <td>
                    <ToggleButton
                      className="mb-2"
                      id="toggle-check"
                      type="checkbox"
                      variant="outline-primary"
                      checked={checked}
                      value="1"
                      onChange={(e) => setChecked(e.currentTarget.checked)}
                    >
                      {statusText}
                    </ToggleButton>
                  </td>
                  <td>
                    <ButtonGroup className="mb-2">
                      <ToggleButton
                        id="toggle-check"
                        type="checkbox"
                        variant="secondary"
                        checked={checked}
                        value="1"
                      >
                        Join Mission
                      </ToggleButton>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Mission;
