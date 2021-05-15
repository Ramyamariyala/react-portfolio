import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tuneup from "../../Assets/Projects/Tuneup.png";
import weatherDashboard from "../../Assets/Projects/weather.png";
import blogme from "../../Assets/Projects/Blogme.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogme}
              isBlog={false}
              title="Blogme!!!"
              description=" Create an environment where a user can make a 
              blog to share their experiences and opinions. They can receive 
              feedback through comments from other users.We wanted to forum to 
              express our ideas and opinions.BlogMe gives a much simpler and 
              concise option for users just wanting to publish their thoughts."
              link="https://github.com/Ramyamariyala/BlogMe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tuneup}
              isBlog={false}
              title="Tune up!!!!"
              description="Tune Up is an app of simplicity that searches artist albums and lyrics. 
              Our app features a search engine that returns a visual list of the inputted artist, 
              as well as text lyrics of selected songs.Our app helps the user to read the lyrics easily."
              
              link="https://github.com/jkelly101/tune-up-music-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherDashboard}
              isBlog={false}
              title="Weather Dashboard"
              description="Our weather dashboard with form with inputs the user for searches for a city 
              is been presented with current and future conditions for that city. When user have a view 
              current weather conditions for that city then the user is presented with the city name, 
              the date,an icon representation of weather conditions, the temperature, the humidity, 
              the wind speed,and the UV index WHEN user view the UV index."
              link="https://github.com/Ramyamariyala/weatherDashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
