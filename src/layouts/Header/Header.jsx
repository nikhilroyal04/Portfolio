import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const sections = ['Home', 'Services', 'Skills', 'Projects', 'About', 'Contact'];
const sectionIds = ['#home', '#services', '#skills', '#projects', '#about', '#contact'];

function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'lightgrey', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ScatterPlotIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 8,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {isSmallScreen && (
              <Typography
                variant="h6"
                noWrap
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                PortFolio
              </Typography>
            )}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <Box sx={{ width: 250 }}>
                <Box sx={{ bgcolor: 'lightblue', p: 2 }}>
                  <Typography variant="h4" fontWeight="bold" color="black" align='center' pt={2} pb={2}>
                    Nikhil Chaudhary
                  </Typography>
                </Box>
                <Divider />
                <List>
                  {sections.map((section, index) => (
                    <ListItem button key={section} onClick={() => {
                      handleDrawerClose();
                      if (section === 'Projects') {
                        window.location.href = '/projects';
                      } else {
                        scrollToSection(sectionIds[index]);
                      }
                    }}>
                      <ListItemText primary={section} sx={{ textAlign: 'center', fontWeight: "bold" }} />
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Explore
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section, index) => (
              <Button
                key={section}
                onClick={() => {
                  if (section === 'Projects') {
                    window.location.href = '/projects';
                  } else {
                    scrollToSection(sectionIds[index]);
                  }
                }}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: "bold" }}
              >
                {section}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Nikhil Chaudhary" src="/static/images/avatar/2.jpg" sx={{ width: 45, height: 45 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
