import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/RamyaMariyalaCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "";
  const [ upadteSpojRank] = useState(0);
  const [ upadteHackerank] = useState(0);
  const [ upadateSem] = useState(0);
  const [ upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Projects</h3>
            <Resumecontent
              title="Blogme!!!"
              content={[
                "Create an environment where a user can make a blog to share their experiences and opinions. They can receive feedback through comments from other users.",
                " We wanted to forum to express our ideas and opinions.BlogMe gives a much simpler and concise option for users just wanting to publish their thoughts.",
              ]}
            />
            <Resumecontent
              title="Tune up!!!!"
              content={[
                "Tune Up is an app of simplicity that searches artist albums and lyrics. Our app features a search engine that returns a visual list of the inputted artist, as well as text lyrics of selected songs.",
                " Our app helps the user to read the lyrics easily. ",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Rutgers Coding Bootcamp FullStack "
              date="2020 - 2021 "
              content={["Grading: A+"]}
            />
            <Resumecontent
              title="Certification in AUTOCAD (Advanced 3D)."
              date="2015"
              content={["Grading: A+"]}
            />
            <Resumecontent
              title=" Bachelor of Engineering ( Osmania University) "
              date="2005 - 2015"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
