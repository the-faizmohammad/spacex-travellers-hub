import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from './components/Rockets';
import { reserveRocket } from './redux/rocketsSlice';

const mockStore = configureStore();

describe('Rockets Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            rocket_name: 'Falcon 9',
            flickr_images: ['url'],
            description: 'Description',
            reserved: false,
          },
        ],
        status: 'succeeded',
        error: null,
        reserved: [],
      },
    });
  });

  test('renders rockets successfully', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketNameElement = screen.getByText('Falcon 9');
    expect(rocketNameElement).toBeInTheDocument();
  });

  test('handles reserving a rocket', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const reserveButton = screen.getByText('Reserve Rockets');
    fireEvent.click(reserveButton);

    expect(store.getActions()).toContainEqual(reserveRocket(1));
  });
});
