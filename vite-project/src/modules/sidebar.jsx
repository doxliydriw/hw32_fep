import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

export function Sidebar() {
    const alertClicked = () => {
    alert('You clicked the menu item');
    };
    
  return (
    <ListGroup>
      <ListGroup.Item action variant="light" className="mb-3" onClick={alertClicked}>
        First button
      </ListGroup.Item>
      <ListGroup.Item action variant="light" className="mb-3" onClick={alertClicked}>
        Second button
          </ListGroup.Item>
          <ListGroup.Item action variant="light" className="mb-3" onClick={alertClicked}>
        Third button
          </ListGroup.Item>
          <ListGroup.Item action variant="light" className="mb-3" onClick={alertClicked}>
        Forth button
      </ListGroup.Item>
    </ListGroup>
  );
}
