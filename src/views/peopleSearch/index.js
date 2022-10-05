import Header from '../../components/layout/header'
import React, { useState } from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import ByName from "./byname";

export default function PeopleSearch() {
  const [key, setKey] = useState("search-result");

  const handleSelect = (key) => {
    setKey(key);
  };

  return (
    <div>
      <Header />
      <Container fluid>
        <Row className="left-panel-row">
          <Col md={4} className="left-side">
            <Tabs activeKey={key} id="left-panel" onSelect={handleSelect}>
              <Tab eventKey="search-result" title="Search Result">
              </Tab>
              <Tab
                eventKey="search-history"
                id="search-history"
                title="Search History"
              >
              </Tab>
            </Tabs>
          </Col>
          <Col md={8} className="right-side">
            <h3>People Search</h3>
            <Tabs defaultActiveKey="ByName" id="rightside-tab">
              <Tab eventKey="ByName" title="By Name">
                <ByName />
              </Tab>
              <Tab eventKey="By Phone" title="By Phone">
              </Tab>
              <Tab eventKey="By Email" title="By Email">
              </Tab>
              <Tab eventKey="Advanced" title="Advanced">
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  )
}