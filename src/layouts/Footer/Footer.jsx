import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        bottom: 0,
        bgcolor: 'gray',
        color: 'White',
        py: 2,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} >
            <Typography variant="h6" gutterBottom fontSize={25}>
              About Me
            </Typography>
            <Typography variant="body1" fontSize={15} width={330}>
              Dedicated to crafting exceptional web applications, I bring a blend of passion and expertise to every project. With a focus on innovation and user-centric design, I strive to create digital experiences that captivate and inspire. Let's work together to turn your ideas into reality.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom fontSize={25}>
              Quick Links
            </Typography>
            <Link href="#home" color="inherit" underline="hover" fontSize={20} >
              Home
            </Link><br />
            <Link href="#about" color="inherit" underline="hover" fontSize={20}>
              About
            </Link><br />
            <Link href="#projects" color="inherit" underline="hover" fontSize={20}>
              Projects
            </Link><br />
            <Link href="#contact" color="inherit" underline="hover" fontSize={20}
            >
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom fontSize={25}>
              Contact
            </Typography>
            <Typography variant="body2" fontSize={20} mb={1}>
              Email: nikhilchaudhary390@gmail.com
            </Typography>
            <Typography variant="body2" fontSize={20} >
              Phone: +919068552519
            </Typography>
            <Box mt={2}>
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/nikhil-chaudhary-12819a19a"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '30px', transition: 'box-shadow 0.3s' }} // Add transition for smoother effect
                sx={{
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(255, 255, 255, 0.2)' // White box shadow on hover
                  }
                }}
              >
                <LinkedInIcon style={{ fontSize: "inherit" }} />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="GitHub"
                href="https://github.com/NikhilRoyal04"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '30px', transition: 'box-shadow 0.3s' }} // Add transition for smoother effect
                sx={{
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(255, 255, 255, 0.2)' // White box shadow on hover
                  }
                }}
              >
                <GitHubIcon style={{ fontSize: 'inherit' }} />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                href="https://www.instagram.com/nikhilroyal04"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '30px', transition: 'box-shadow 0.3s' }} // Add transition for smoother effect
                sx={{
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(255, 255, 255, 0.2)' // White box shadow on hover
                  }
                }}
              >
                <InstagramIcon style={{ fontSize: "inherit" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={4}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Nikhil Chaudhary. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
