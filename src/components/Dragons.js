import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, Button, Row, Col,
} from 'react-bootstrap';
import '../styles/Mission.css';
import { fetchdragons, reserveDragon } from '../redux/dragonSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonsData = useSelector((state) => state.dragon.data);
  const isLoading = useSelector((state) => state.dragon.isLoading);

  useEffect(() => {
    if (!dragonsData.length) {
      dispatch(fetchdragons());
    }
  }, [dispatch, dragonsData]);

  const handleReserveDragon = (id) => {
    dispatch(reserveDragon({ id }));
  };

  if (isLoading) {
    return <p>Loading dragons...</p>;
  }

  return (
    <Row xs={1} className="g-4">
      {dragonsData.map((dragon) => (
        <Col key={dragon.id}>
          <Card className="h-100">
            <Row className="align-items-center">
              <Col md={6}>
                <Card.Img variant="top" src={dragon.flickr_images[0]} alt={dragon.name} />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>{dragon.name}</Card.Title>
                  <Card.Text>{dragon.description}</Card.Text>
                  <Button
                    onClick={() => handleReserveDragon(dragon.id)}
                    className={dragon.reserved ? 'btn-danger' : 'btn-primary'}
                  >
                    {dragon.reserved ? 'Reserved' : 'Reserve Dragon'}
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Dragons;
