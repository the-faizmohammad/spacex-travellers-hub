
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdragons } from '../redux/dragonSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonsData = useSelector((state) => state.dragon.data);
  const isLoading = useSelector((state) => state.dragon.isLoading);

  useEffect(() => {
    dispatch(fetchdragons());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading dragons...</p>;
  }

  return (
    <div>
      <h1>Dragons</h1>
      {dragonsData.map((dragon) => (
        <div key={dragon.id}>
          <h2>{dragon.name}</h2>
          <p>
            Type:
            {dragon.type}
          </p>
          <img src={dragon.flickr_images[0]} alt={dragon.name} />
        </div>
      ))}
    </div>
  );
};

export default Dragons;
