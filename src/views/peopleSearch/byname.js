import React from "react";
import { Col, Row, FloatingLabel, Form, Accordion } from "react-bootstrap";
import { CountryRegionData } from "react-country-region-selector";
import { Formik } from "formik";
import * as Yup from "yup";

const ByName = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required()
      .min(2, "Minimum 2 characters"),
    lastName: Yup.string()
      .required()
      .min(2, "Minimum 2 characters"),
    stateCode: Yup.string()
      .min(2, "State Code Length must be 2 characters")
      .max(2, "State Code Length must be 2 characters"),
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "",
          lastName: "",
          stateCode: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
          dirty,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3" style={{ marginTop: "40px" }}>
              <Col md>
                <FloatingLabel label="First Name (Required)">
                  <Form.Control
                    type="text"
                    value={values.firstName}
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.firstName && touched.firstName ? "is-invalid" : ""
                    }
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel label="Last Name (Required)">
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastName && touched.lastName ? "is-invalid" : ""
                    }
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Middle Name (Required)"
                >
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col md>
                <p>
                  Address is optional. For common names it can help narrow down
                  the results.
                </p>
              </Col>
            </Row>
            <Row className="g-3 mt-3">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="City">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Zip Code">
                  <Form.Control type="text" />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-3 mt-2">
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="State Code (2 characters)"
                >
                  <Form.Control
                    type="text"
                    name="stateCode"
                    value={values.stateCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.stateCode && touched.stateCode ? "is-invalid" : ""
                    }
                  />
                  {errors.stateCode && touched.stateCode && (
                    <div className="invalid-feedback">{errors.stateCode}</div>
                  )}
                </FloatingLabel>
              </Col>
              <Col md>
                <Form.Select aria-label="Default select example">
                  <option>Country</option>
                  {CountryRegionData.map((item, i) => {
                    return <option key={i}>{item[0]}</option>;
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row
              className="g-3 mt-2 d-block text-end"
              style={{ margin: "1rem 0px 2rem" }}
            >
              <p className="credit-p d-inline">
                A match costs{" "}
                <span style={{ color: "rgb(88, 183, 47)" }}> 2 credits</span>
              </p>
              <button
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
                disabled={!(isValid && dirty)}
              >
                Search information
              </button>
            </Row>
          </Form>
        )}
      </Formik>

      <hr></hr>
      <Row className="mt-2">
        <p>Frequently Asked Questions</p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How will I be charged?</Accordion.Header>
            <Accordion.Body>
              A match costs 2 credits.<br></br>
              You may get many results for one search. We will only charge you 2
              credits per search.
              <br></br>You will not charged if your search yields no results.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is included in a person profile?
            </Accordion.Header>
            <Accordion.Body>
              Our results usually include Name, Gender, Age, Address, Mobile
              Phone, Email Address, Landline Phone, Username, Images,
              Associates, Social Profile URLs, Career and Education.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How accurate is our data?</Accordion.Header>
            <Accordion.Body>
              In short, very accurate. Though we do not have any effective way
              to verify the accuracy of each data field in over 10 billion
              records, we manage to achieve a very high accuracy compared to
              other people-data providers by combining and cross-referencing
              over one million publicly available sources.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </>
  );
};

export default ByName;