import React from "react";
import { Container  , Row , Col , CardHeader , CardBody  , CardTitle , Button , Card , CardFooter , CardText} from "reactstrap";

class MyApp extends React.Component {
  render() {
    return (
      <Container>
        <h1>Hello World</h1>
        <Row>
          <Col className="col-md-3">
            <Card
              className="my-2"
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>Header</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
          <Col className="col-md-3">
            <Card
              className="my-2"
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>Header</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
          <Col className="col-md-3">
            <Card
              className="my-2"
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>Header</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
          <Col className="col-md-3">
            <Card
              className="my-2"
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>Header</CardHeader>
              <CardBody>
                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyApp;
