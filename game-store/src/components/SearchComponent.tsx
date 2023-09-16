import { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface Props {
  onSubmission: (searchText: string) => void;
}

function SearchComponent({onSubmission}:Props) {
    const ref=useRef<HTMLInputElement>(null);
  return (
    <>
      <Container className="my-2 ">
        <Row className="justify-content-end">
          <Col sm={6}>
            <Form
              className="d-flex container-fluid"
              onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSubmission(ref.current.value)
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 container-fluid"
                aria-label="Search"
                ref={ref}
              />
              <Button type="submit" className="bg-dark btn btn-outline-dark text-white">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SearchComponent;
