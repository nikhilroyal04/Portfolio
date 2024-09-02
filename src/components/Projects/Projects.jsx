import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import ACADEMY from "../../assets/images/ACADEMY.png";
import MUI_ADMIN from "../../assets/images/MUI_ADMIN.png";
import PORTFOLIO from "../../assets/images/Portfolio.png";
import ADMIN_CHAKRA from "../../assets/images/Chakra_Panel.png";
import BACKEND_GAME from "../../assets/images/Backend_Game.png";

const projects = [
  {
    id: 1,
    title: "Admin Panels: Material-UI",
    image: MUI_ADMIN,
    github: "https://github.com/nikhilroyal04/Flexy",
    website: "https://admin.ledocity.com/",
    points: [
      "Developed a comprehensive admin panel using Material-UI, a React UI framework known for its rich set of components and sleek design.",
      "Designed with a focus on usability and aesthetics, providing administrators with an intuitive interface to manage various aspects of the system.",
      "Features include user management, data visualization, and dashboard analytics, all seamlessly integrated into a single cohesive platform.",
      "Ensured responsiveness across devices for accessibility and usability.",
    ],
  },
  {
    id: 2,
    title: "Admin Panels: Chakra UI",
    image: ADMIN_CHAKRA,
    github: "https://github.com/nikhilroyal04/Admin_chakra",
    website: "https://panel.hullu.in/",
    points: [
      "Designed and implemented an admin dashboard using Chakra UI, a modular and accessible component library for React applications.",
      "Leveraged Chakra UI's flexibility and customization options to create a tailored user experience aligned with the project's branding.",
      "Incorporated features such as real-time data updates, interactive charts, and customizable themes to enhance user engagement.",
      "Ensured cross-browser compatibility and accessibility standards for a smooth user experience.",
    ],
  },
  {
    id: 3,
    title: "Backend Project - Color Game",
    image: BACKEND_GAME,
    github: "https://github.com/nikhilroyal04/Backend_Game",
    website: "https://panel.hullu.in/",
    points: [
      "Developed a robust backend system for a color game using Node.js and Express.js, providing a scalable and efficient architecture to handle game data and logic.",
      "Implemented CRUD operations to manage game elements such as colors, levels, and user progress, ensuring seamless interaction between the frontend and backend.",
      "Integrated Cloudinary for image storage and manipulation, enabling users to customize their game avatars and enhance their gaming experience.",
      "Leveraged both MySQL and MongoDB databases to store game data securely and accommodate different types of data requirements.",
      "Designed RESTful APIs to facilitate communication between the frontend client and backend server, ensuring smooth data flow and efficient resource management.",
    ],
  },
  {
    id: 4,
    title: "Academy Management Panel",
    image: ACADEMY,
    github: "https://github.com/nikhilroyal04/Academy_Management_Panel",
    website: "https://admin.ledocity.com/",
    points: [
      "Developed a comprehensive academy management panel encompassing both frontend and backend components.",
      "Implemented the frontend using React, HTML, CSS, and JavaScript, creating an intuitive user interface for managing courses, students, and instructors.",
      "Utilized Material-UI for the frontend design, ensuring consistency and usability across the platform.",
      "Designed and developed the backend using Node.js and Express.js, providing a robust foundation for handling user authentication, data storage, and business logic.",
      "Integrated features such as role-based access control (RBAC), attendance tracking, and grade management to meet the diverse needs of academic institutions.",
      "Implemented RESTful APIs to enable seamless communication between the frontend and backend, facilitating data exchange and system interoperability.",
    ],
  },
  {
    id: 5,
    title: "My Portfolio Website",
    image: PORTFOLIO,
    github: "https://github.com/nikhilroyal04/Portfolio",
    website: "/",
    points: [
      "Designed and developed a responsive portfolio website using Material-UI and React.",
      "Showcases my projects, skills, and services in a visually appealing and user-friendly manner.",
      "Implemented responsive design principles to ensure optimal viewing experience across various devices, including desktops, tablets, and smartphones.",
      "Utilized React Router for seamless navigation between different sections of the portfolio.",
      "Incorporated various Material-UI components such as AppBar, Drawer, Cards, and Buttons to enhance the website's functionality and aesthetics.",
      "Optimized for performance and accessibility, ensuring fast load times and compliance with web accessibility standards.",
    ],
  },
];

const Projects = () => {
  return (
    <Container
      maxWidth="lg"
      style={{ paddingTop: "80px", marginBottom: "50px" }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12}>
            <Card elevation={3}>
              <CardContent>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <Box display="flex" justifyContent="center">
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <CardHeader title={project.title} />
                    <ul>
                      {project.points.map((point, index) => (
                        <li key={index}>
                          <Typography variant="body1">{point}</Typography>
                        </li>
                      ))}
                    </ul>
                    <Box mt={3} display="flex">
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                      <Button
                        sx={{ ml: 2 }}
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Site
                      </Button>

                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
