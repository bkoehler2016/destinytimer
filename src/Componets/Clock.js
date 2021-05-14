import React from "react";
import Clock from "react-live-clock";
import "./Clock.css";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

function DestinyTime() {
  return (
    <>
      <h1>Daily Reset Time</h1>
      <h2>Weekley resets are every Tuesday</h2>
      <ul>
        <li>Destiny Time 10:00 AM</li>
        <li>East Coast 1:00 PM</li>
        <li>Europe 7:00 PM</li>
        <li>UK 6:00 PM</li>
      </ul>
      <Row>
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5"> Destiny Time</CardTitle>

            <CardText>
              <Clock
                className={CSS.ukFormat}
                format={"hh:mm:ss A"}
                style={{ fontSize: "1.5em" }}
                ticking={true}
                timezone={"US/Pacfic"}
              />
            </CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">East Coast US:</CardTitle>
            <CardText>
              <Clock
                className={CSS.ukFormat}
                format={"hh:mm:ss A"}
                style={{ fontSize: "1.5em" }}
                ticking={true}
                timezone={"US/Eastern"}
              />
            </CardText>
          </Card>
        </Col>

        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">UK:</CardTitle>
            <CardText>
              <Clock
                className={CSS.ukFormat}
                format={"hh:mm:ss A"}
                style={{ fontSize: "1.5em" }}
                ticking={true}
                timezone={"Europe/Jersey"}
              />
            </CardText>
          </Card>
        </Col>

        <Col sm="4">
          <Card body>
            <CardTitle tag="h5">Europe</CardTitle>
            <CardText>
              <Clock
                className={CSS.ukFormat}
                format={"hh:mm:ss A"}
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
