import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
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
      <h1 className="mb-4">Dragons</h1>
      {dragonsData.map((dragon) => (
        <Card key={dragon.id} className="mb-3">
          <Card.Img variant="top" src={dragon.flickr_images[0]} alt={dragon.name} />
          <Card.Body>
            <Card.Title>{dragon.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Type:
                {dragon.type}
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Dragons;
