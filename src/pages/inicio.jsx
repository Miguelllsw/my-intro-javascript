import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className="justify-content-center" style={{marginTop:"50px"}}>
        <Col xs={6}>
          <Button variant="primary" onClick={handleShow}>
            Click
          </Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>Teamo mi amor</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Example;
