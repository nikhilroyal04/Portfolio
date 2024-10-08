import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import avtimg from "../../assets/images/profile.jpg";

const sections = ["Home", "Services", "Skills", "Projects", "About", "Contact"];
const sectionIds = [
  "#home",
  "#services",
  "#skills",
  "#projects",
  "#about",
  "#contact",
];

function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/nikhil-chaudhary-12819a19a/";
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "lightgrey", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ScatterPlotIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 8,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            My Portfolio
          </Typography>
          {isSmallScreen && (
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isSmallScreen && (
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                }}
              >
                <Typography
                  variant="h6"
                  component={RouterLink}
                  to="/"
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Portfolio
                </Typography>
              </Link>
            )}

            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
              <Box sx={{ width: 250 }}>
                <Box sx={{ bgcolor: "lightblue", p: 2 }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="black"
                    align="center"
                    pt={2}
                    pb={2}
                  >
                    Nikhil Chaudhary
                  </Typography>
                </Box>
                <Divider />
                <List>
                  {sections.map((section, index) => (
                    <ListItem
                      button
                      key={section}
                      onClick={() => {
                        handleDrawerClose();
                        if (section === "Projects") {
                          window.location.href = "/projects";
                        } else if (section === "Home") {
                          window.location.href = "/";
                        } else {
                          scrollToSection(sectionIds[index]);
                        }
                      }}
                    >
                      <ListItemText
                        primary={section}
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleClick}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {sections.map((section, index) => (
              <Button
                key={section}
                onClick={() => {
                  if (section === "Projects") {
                    window.location.href = "/projects";
                  } else {
                    scrollToSection(sectionIds[index]);
                  }
                }}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {section}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Nikhil Chaudhary"
                src='https://res.cloudinary.com/dqe1ygj6a/image/upload/v1725176320/Personal/qxjnlnupkuahtz4pup5t.png'
                sx={{ width: 50, height: 50 }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
