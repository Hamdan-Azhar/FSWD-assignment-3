import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "frontend web development project",
    description:
      "A beautiful web application of a restaurant built with react on the frontend and express on the backend. It has the functionality of allowing the user to reserve a table in the restaurant",
    getImageSrc: () => require("../images/react_image.png"),
    link:"https://github.com/Hamdan-Azhar/Meta-frontend-developer-capstone"
  },
  {
    title: "backend web development project",
    description:
      "A backend of a web application built with django that has the functionality of performing CRUD operations through APIs",
    getImageSrc: () => require("../images/django_image.png"),
    link:"https://github.com/Hamdan-Azhar/Meta-backend-developer-capstone"
  },
  {
    title: "data science project",
    description:
      "Developmemt of a classification model that predicts whether future SpaceX falcon9 rocket launches' first stage will land successfully or not.",
    getImageSrc: () => require("../images/data_scientist_image.jfif"),
    link:"https://github.com/Hamdan-Azhar/IBM-data-science-professional-certificate-final-project"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      px={8}
      spacing={16}
      py={16}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
