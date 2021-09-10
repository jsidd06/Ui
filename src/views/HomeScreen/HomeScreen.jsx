import React from "react";
import {
  Container,
  Button,
  Col,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
} from "reactstrap";
import Image1 from "../../Images/a1.jpg";
import Image2 from "../../Images/a2.jpg";
import Image3 from "../../Images/a3.jpg";
import Image4 from "../../Images/a4.jpg";
import Image6 from "../../Images/a6.jpg";
import Image7 from "../../Images/a7.jpg";
import Image8 from "../../Images/a8.jpg";
import Image9 from "../../Images/a9.jpg";
import Image10 from "../../Images/s1.jpg";
import Image11 from "../../Images/s2.png";
import Image12 from "../../Images/s3.jpg";
import Image13 from "../../Images/s4.png";

function HomeScreen() {
  return (
    <>
      <Container fluid>
        <section
          className="row"
          style={{
            backgroundImage: `url(${Image1})`,
            maxWidth: "100vw",
            minHeight: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container>
            <div className="text-center text-white">
              <h1 className="pt-5">We are a digital creative</h1>
              <h1>agency. We focus on design,</h1>
              <h1>consulting, and technology.</h1>
              <Button outline color="secondary" className="mt-3">
                Read More
              </Button>{" "}
            </div>
          </Container>
        </section>
        <Container>
          <h2 className="text-center mt-4">What is happening</h2>
          <CardGroup className="mt-4">
            {[
              { title: "Lorem", image: Image4 },
              { title: "Lorem", image: Image2 },
              { title: "Lorem", image: Image3 },
            ].map((p) => (
              <Card className="m-3">
                <CardImg top width="100%" src={p.image} />
                <CardBody>
                  <CardTitle tag="h5">{p.title}</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, aperiam aspernatur cupiditate inventore modi sed
                    sint obcaecati quaerat.
                  </CardText>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
        </Container>
        <section
          className="row"
          style={{
            backgroundImage: `url(${Image6})`,
            minHeight: 400,
            maxWidth: "100vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Container className="text-center">
            <div className="text-center text-white">
              <h1 className="pt-5">We are a digital creative</h1>
              <h1>agency. We focus on design,</h1>
              <h1>consulting, and technology.</h1>
              <Button outline color="secondary" className="mt-3">
                Read More
              </Button>{" "}
            </div>
          </Container>
        </section>
        <Container>
          <h2 className="text-center mt-4">What is happening</h2>
          <CardGroup className="mt-4">
            {[
              { title: "Lorem", image: Image4 },
              { title: "Lorem", image: Image2 },
              { title: "Lorem", image: Image3 },
            ].map((p) => (
              <Card className="m-3">
                <CardImg top width="100%" src={p.image} />
                <CardBody>
                  <CardText className="text-center">
                  Lorem.❤️
                  </CardText>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
          <CardGroup className="mt-4">
            {[
              { title: "Lorem", image: Image7 },
              { title: "Lorem", image: Image8 },
              { title: "Lorem", image: Image9 },
            ].map((p) => (
              <Card className="m-3">
                <CardImg top width="100%" src={p.image} />
                <CardBody>
                  <CardText className="text-center">
                    Lorem.❤️
                  </CardText>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
          <div className="text-center">
            <Button outline color="primary" className="mt-3 w-50 " size="sm">
              Read More
            </Button>
          </div>
        </Container>
        <Container className="mt-5">
          <div
            style={{ maxWidth: 400, margin: "auto" }}
            className="text-center"
          >
            <h3>Brands & Clients</h3>
            <hr />
          </div>
        </Container>
        <Container className="mt-5 text-center">
          <Row>
            <Col md="3">
              <img
                src={Image10}
                style={{ maxWidth: 200, maxHeight: 80, minHeight: 80 }}
              />
            </Col>
            <Col md="3">
              <img
                src={Image11}
                style={{ maxWidth: 200, maxHeight: 80, minHeight: 80 }}
              />
            </Col>
            <Col md="3">
              <img
                src={Image12}
                style={{ maxWidth: 200, maxHeight: 80, minHeight: 80 }}
              />
            </Col>
            <Col md="3">
              <img
                src={Image13}
                style={{ maxWidth: 200, maxHeight: 80, minHeight: 80 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <footer
        className="mt-5"
        style={{ backgroundColor: "#424242", minHeight: 200 }}
      >
        <Container className="pt-5">
          <div
            style={{ maxWidth: 400, margin: "auto" }}
            className="text-center text-white"
          >
            <h3>Our Work Process</h3>
            <hr />
          </div>
          <p className="text-center text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            dolore a facere voluptatum nisi obcaecati, enim non neque nulla
            officiis suscipit vitae. Cumque aut illo ea eligendi sequi dolorem
            vel!
          </p>
        </Container>
      </footer>
    </>
  );
}

export default HomeScreen;
