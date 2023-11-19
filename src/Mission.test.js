import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from './components/Mission';

const mockStore = configureStore();

describe('Mission Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      mission: {
        data: [
          {
            mission_id: 1,
            mission_name: 'Mission 1',
            description: 'Mission 1 Description',
            reserved: false,
          },
        ],
        isLoading: false,
      },
    });
  });

  test('renders mission data', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const missionNameElement = screen.getByText('Mission 1');
    const missionDescriptionElement = screen.getByText('Mission 1 Description');

    expect(missionNameElement).toBeInTheDocument();
    expect(missionDescriptionElement).toBeInTheDocument();
  });

  test('handles join/leave mission button click', () => {
    render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    const joinLeaveButton = screen.getByText('Join Mission');
    fireEvent.click(joinLeaveButton);

    expect(store.getActions()).toEqual([
      {
        type: 'mission/reserveMission',
        payload: { id: 1 },
      },
    ]);
  });
});
