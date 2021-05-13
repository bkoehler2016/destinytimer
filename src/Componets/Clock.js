import React from "react";
import Clock from "react-live-clock";
import "./Clock.css";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

function DestinyTime() {
  return (
    <>
      <h1>Daily Reset Time</h1>
      <ul>
        <li>Destiny Time 10:00</li>
        <li>East Coast 13:00</li>
        <li>Europe 19:00</li>
        <li>UK 18:00</li>
      </ul>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5"> Destiny Time</CardTitle>

            <CardText>
              <Clock
                className={CSS.ukFormat}
                format={"HH:mm:ss"}
                style={{ fontSize: "1.5em" }}
                ticking={true}
                timezone={"US/Pacfic"}
              />
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">East Coast US:</CardTitle>
            <CardText>
              <Clock
                className={CSS.ukFormat}
                format={"HH:mm:ss"}
                style={{ fontSize: "1.5em" }}
                ticking={true}
                timezone={"US/Eastern"}
              />
            </CardText>
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">UK:</CardTitle>
            <CardText>
              <Clock
                className={CSS.ukFormat}
                format={"HH:mm:ss"}
                style={{ fontSize: "1.5em" }}
                ticking={true}
                timezone={"Europe/Jersey"}
              />
            </CardText>
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Europe</CardTitle>
            <CardText>
              <Clock
                className={CSS.ukFormat}
                format={"HH:mm:ss"}
                style={{ fontSize: "1.5em" }}
                ticking={true}
                timezone={"Europe/Paris"}
              />
            </CardText>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default DestinyTime;
