import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">Copyright &copy;</Col>
        </Row>
      </Container>
    </footer>
  );
};
