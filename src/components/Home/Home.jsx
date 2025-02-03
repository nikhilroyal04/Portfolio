import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  LinearProgress,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import About1 from "../../assets/images/About1.jpg";
import Service1 from "../../assets/images/Service1.webp";
import Service2 from "../../assets/images/Service2.jpg";
import Service3 from "../../assets/images/Service3.jpeg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [phoneError, setPhoneError] = useState("");
  const [apiError, setApiError] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const text = " Let's work together and bring your ideas to life! ";

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const typeCharacter = () => {
      setTimeout(() => {
        setTypedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === text.length) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setTypedText("");
            currentIndex = 0;
          }, 1000);
        }
      }, 50);
    };

    if (isTyping) {
      intervalId = setInterval(typeCharacter, 50);
    } else {
      setTimeout(() => {
        setIsTyping(true);
        setTypedText("");
        currentIndex = 0;
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length < 10 || formData.phone.length > 11) {
      setPhoneError("Enter a valid number");
      return;
    }

    setPhoneError("");
    setApiError("");

    axios
      .post("https://contact-form-server-one.vercel.app/api/contact", formData)
      .then((response) => {
        // Clear form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        // Open success dialog
        setOpenDialog(true);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setApiError("Failed to send message. Please check credentials.");

        // Do not open the dialog if there's an error
        setOpenDialog(false);
      });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const skills = [
    { name: "HTML", value: 100, color: "#6DD5FA" },
    { name: "CSS", value: 95, color: "#FF92A7" },
    { name: "JavaScript", value: 85, color: "#FCE788" },
    { name: "React", value: 85, color: "#FFB74D" },
    { name: "Material-UI", value: 90, color: "#4CAF50" },
    { name: "Chakra UI", value: 95, color: "#E91E63" },
    { name: "Node Js", value: 78, color: "#8BC34A" },
    { name: "Express Js", value: 82, color: "#FF9800" },
    { name: "MySQL", value: 98, color: "#03A9F4" },
    { name: "MongoDB", value: 90, color: "#9C27B0" },
    { name: "Firebase", value: 70, color: "#FF5722" },
    { name: "Figma", value: 65, color: "#009688" },
    { name: "JWT", value: 85, color: "#795548" },
    { name: "Redux", value: 85, color: "#673AB7" },
  ];
  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box
      id="home"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      pb={2}
      minHeight={500}
    >
      {/* Content Section */}
      <Box width="100vw" height="70vh" bgcolor="#f9fbe4" pt={20}>
        <Container
          sx={{
            paddingLeft: { xs: 5, sm: 10, md: 20, lg: 20 }, // Adjust these values for left margin
            paddingRight: { xs: 5, sm: 10, md: 20, lg: 20 },
          }}
        >
          <Grid container alignItems="center">
            {/* Left section containing text and button */}
            <Grid
              item
              container
              xs={12}
              md={8}
              alignItems="center"
              marginBottom={{ xs: 2, md: 0 }}
            >
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ maxHeight: "auto", overflowY: "hidden" }}
                >
                  I'm a passionate developer with expertise in React, Node.js,
                  and MongoDB. I love building efficient, scalable, and
                  user-friendly web applications.
                  <br /> {typedText}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "20px" }}
                  href="https://www.linkedin.com/in/nikhil-chaudhary-12819a19a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire me
                </Button>
              </Grid>
            </Grid>
            {/* Right section containing image */}
            {!isSmallScreen && (
              <Grid item xs={12} md={4} container justifyContent="center">
                <img
                  src="https://res.cloudinary.com/dqe1ygj6a/image/upload/v1725084398/Personal/wntrupcbx9avnbkyjwk2.jpg"
                  alt="Nikhil Chaudhary"
                  style={{
                    maxWidth: "100%",
                    width: "350px",
                    height: "auto",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
      {/* About Me Section */}
      <Box
        id="about"
        mt={10}
        width="70%"
        textAlign="center"
        p={3}
        borderRadius={8}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{ marginBottom: "30px", color: "#333" }}
        >
          About Me
        </Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            {/* Left section containing an image */}
            <img
              src={About1}
              alt="Profile"
              style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ margin: "auto" }}>
            {/* Right section containing the about me paragraph */}
            <Typography
              variant="body1"
              style={{
                lineHeight: "1.6",
                color: "#555",
                textAlign: "left",
                maxWidth: "100%",
              }}
            >
              Greetings! I'm Nikhil Chaudhary, a dynamic Web Developer and
              Creative Innovator with a fervent enthusiasm for crafting
              immersive digital experiences. Fuelled by a blend of creativity
              and technical prowess, I thrive in both Frontend and Backend
              realms, sculpting elegant user interfaces while engineering robust
              backend solutions. My journey in web development has been enriched
              by diverse experiences, from pioneering passion projects to
              collaborating on large-scale ventures. With a relentless drive for
              excellence and a penchant for pushing boundaries, I'm constantly
              exploring new technologies and methodologies to redefine the
              digital landscape. Let's embark on a journey of innovation
              together!
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Services Section */}
      <Box id="services" mt={20} bgcolor="lightblue" width="100%" p={3} pb={18}>
        <Typography variant="h4" align="center" gutterBottom mb={5}>
          My Services
          <Typography variant="body2" align="center">
            what i provide
          </Typography>
        </Typography>
        <Grid
          container
          spacing={isSmallScreen ? 2 : 4}
          justifyContent="center"
          alignItems="center"
          direction={isSmallScreen ? "column" : "row"}
          sx={{ padding: theme.spacing(isSmallScreen ? 2 : 4) }}
        >
          {/* Frontend */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: isSmallScreen ? theme.spacing(2) : 0,
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: isMediumScreen ? "300px" : "400px",
                height: "300px",
                borderRadius: "12px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={Service1}
                alt="Frontend"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Frontend
                </Typography>
                <Typography variant="body2">
                  HTML, CSS, JavaScript, React
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Backend */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: isSmallScreen ? theme.spacing(2) : 0,
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: isMediumScreen ? "300px" : "400px",
                height: "300px",
                borderRadius: "12px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={Service2}
                alt="Backend"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Backend
                </Typography>
                <Typography variant="body2">
                  Node.js, Express, MongoDB
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Database */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: isSmallScreen ? theme.spacing(2) : 0,
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: isMediumScreen ? "300px" : "400px",
                height: "300px",
                borderRadius: "12px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={Service3}
                alt="Database"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Database
                </Typography>
                <Typography variant="body2">MySQL, MongoDB, SQL</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Skills Section */}
      <Box id="skills" mt={10} width="70%" textAlign="center">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          style={{ color: "#333", marginBottom: "50px" }}
        >
          My Skills
        </Typography>
        <Grid container spacing={3}>
          {/* Left section containing text */}
          <Grid
            item
            xs={12}
            md={6}
            style={{ textAlign: "left", marginRight: "30px" }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              style={{ color: "#333" }}
            >
              My Creative skills
            </Typography>
            <Typography
              variant="body1"
              style={{
                lineHeight: "1.6",
                color: "#555",
                textAlign: "left",
                maxWidth: "100%",
              }}
            >
              Driven by an unrelenting passion for web development, I aspire to
              join a prestigious organization where I can leverage my skills to
              create impactful digital solutions. <br />
              With a commitment to lifelong learning and an eagerness to embrace
              new challenges, I am dedicated to continuously enhancing my
              expertise and staying at the forefront of technological
              advancements.
            </Typography>

            <Typography
  variant="h4"
  fontWeight="bold"
  gutterBottom
  style={{ color: "#333", marginTop: "20px" }}
>
  Experience
            </Typography>
            <Typography
              variant="body1"
              style={{
                lineHeight: "1.6",
                color: "#555",
                textAlign: "left",
                maxWidth: "100%",
              }}
            >
              <strong>Internship at Tangential Ed. Power Pvt. Ltd:</strong>
              <br />
              During my internship at Tangential Ed. Power Pvt. Ltd. (January 2023 – June
              2023), I worked as a MERN Stack Developer Intern, where I contributed to
              full-stack web applications using MongoDB, Express.js, React, and Node.js.
              My role involved working on user authentication, role-based access control,
              and creating responsive UI designs.
              <br />
              <br />
              I also collaborated with cross-functional teams to deliver scalable
              solutions, conducted code reviews, and optimized application performance.
              Additionally, I managed databases using MySQL and MongoDB, ensuring data
              integrity and efficiency.
            </Typography>
            <Typography
              variant="body1"
              style={{
                lineHeight: "1.6",
                color: "#555",
                textAlign: "left",
                maxWidth: "100%",
              }}
            >
              <strong>Full-Time Role at Tangential Ed. Power Pvt. Ltd:</strong>
              <br />
              After my internship, I continued as a Full Stack Developer (July 2024 –
              November 2024), focusing on building scalable MERN stack applications. I
              developed responsive UIs, integrated advanced features like role-based
              access control, and optimized databases using MongoDB and MySQL.
              <br />
              <br />
              Working with cross-functional teams, I ensured high-quality, user-centric
              solutions while conducting code reviews and enhancing application
              performance.
            </Typography>
            <Typography
              variant="body1"
              style={{
                lineHeight: "1.6",
                color: "#555",
                textAlign: "left",
                maxWidth: "100%",
              }}
            >
              <strong>Full Stack Developer at CMT AI:</strong>
              <br />
              Currently, I am working as a Full Stack Developer at CMT AI (January 2025 –
              Present), where I build and maintain end-to-end web applications. My focus
              is on creating intuitive front-end interfaces and efficient back-end
              systems, collaborating with cross-functional teams to deliver scalable,
              high-performance solutions.
              <br />
              <br />
              My expertise includes API integration, database management, and
              implementing best practices for code quality, security, and testing. I also
              work on optimizing application performance and ensuring seamless user
              experiences across platforms.
            </Typography>


            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px", marginRight: "10px" }}
              href="/projects"
            >
              Visit Projects
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px", marginRight: "10px" }}
              href="https://github.com/NikhilRoyal04"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
              href="https://www.linkedin.com/in/nikhil-chaudhary-12819a19a"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Grid>

          {/* Right section containing progress bars */}
          <Grid item xs={12} md={5} mt={15}>
            {skills.map((skill, index) => (
              <Box key={index} mb={3}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body1" style={{ color: "#333" }}>
                    {skill.name}
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: skill.color,
                    },
                  }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>

      {/* Contact Section */}

      <Box
        id="contact"
        mt={10}
        width="90%"
        display="flex"
        justifyContent="center"
      >
        <Box
          width="70%"
          textAlign="center"
          bgcolor="#f8f9fa"
          borderRadius="10px"
          p={4}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            style={{ color: "#333" }}
          >
            Get in Touch
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  color="primary"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  color="primary"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              {/* Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  color="primary"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              {/* Phone */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  color="primary"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={Boolean(phoneError)}
                  helperText={phoneError}
                  inputProps={{ maxLength: 11 }}
                />
              </Grid>
              {/* Message Textarea */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  label="Message"
                  color="primary"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
              {apiError && (
                <Grid item xs={12}>
                  <Typography color="error" variant="body2" align="center">
                    {apiError}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#1976D2" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Your response was sent successfully!
              </Typography>
            </DialogTitle>
            <DialogContent sx={{ textAlign: "center" }}>
              <CheckCircleIcon sx={{ color: "green", fontSize: 96 }} />
              <Typography variant="body1" fontWeight="bold">
                We will get back to you soon.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}
