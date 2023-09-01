import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  ModalTitle,
  ModalFooter,
} from "react-bootstrap";
import { useState } from "react";

interface ModalProps {
  text: string;
  variant: "primary" | "secondary" | "danger";
}

const ModalComponent = ({ text, variant }: ModalProps) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        onClick={handleShow}
        variant={variant}
        size="lg"
        style={{ marginRight: "1rem", padding: " 0.4rem 2.3rem" }}
      >
        {text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <ModalTitle>{text}</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text> Email </InputGroup.Text>
            <FormControl type="email" />
          </InputGroup>
          <InputGroup className="mb-1">
            <InputGroup.Text>Password</InputGroup.Text>
            <FormControl type="password" />
          </InputGroup>
        </Modal.Body>
        <ModalFooter>
          <Button
            onClick={handleClose}
            size="lg"
            style={{ marginRight: "1rem", padding: " 0.2rem 2rem" }}
          >
            Close
          </Button>
          <Button
            variant={variant}
            size="lg"
            style={{ marginRight: "1rem", padding: " 0.3rem 2.2rem" }}
          >
            {text}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalComponent;
