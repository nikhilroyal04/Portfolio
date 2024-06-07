import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, Grid, Card, CardMedia, CardContent, LinearProgress, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Profile from "../../assets/images/profile.jpg";
import About1 from "../../assets/images/About1.jpg";
import About2 from "../../assets/images/About2.jpg";
import Service1 from "../../assets/images/Service1.webp";
import Service2 from "../../assets/images/Service2.jpg";
import Service3 from "../../assets/images/Service3.jpeg";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
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
            setTypedText('');
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
        setTypedText('');
        currentIndex = 0;
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDialog(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const skills = [
    { name: 'HTML', value: 100, color: '#6DD5FA' },
    { name: 'CSS', value: 95, color: '#FF92A7' },
    { name: 'JavaScript', value: 85, color: '#FCE788' },
    { name: 'React', value: 85, color: '#FFC947' },
    { name: 'Material-UI', value: 90, color: '#69F0AE' },
    { name: 'Chakra UI', value: 95, color: '#FF8A80' },
    { name: 'Node.js', value: 78, color: '#A7F0BA' },
    { name: 'Express', value: 82, color: '#FFD180' },
    { name: 'MySQL', value: 98, color: '#81D4FA' },
    { name: 'MongoDB', value: 90, color: '#FFA8A8' }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={25} mb={5} minHeight={500} >
      {/* Content Section */}
      <Box display="flex" alignItems="center" >
        {/* Left section containing text and button */}
        <Box display="flex" alignItems="center" marginRight={2}>
          <Box width={900} justifyContent="space-between">
            <Typography variant="h5" gutterBottom width={600} style={{ height: '130px', overflowY: 'hidden' }}>
              I'm a passionate developer with expertise in React, Node.js, and MongoDB. I love building efficient, scalable, and user-friendly web applications.<br/> {typedText}
            </Typography>
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
          </Box>
        </Box>
        {/* Right section containing image */}
        <img src={Profile} alt="Your Image" style={{ maxWidth: '500px', width: "350px", height: 'auto', borderRadius: '50%' }} />
      </Box>
      {/* About Me Section */}
      <Box mt={20} width="70%" textAlign="center" p={3} borderRadius={8}>
        <Typography variant="h3" gutterBottom style={{ marginBottom: '30px', color: '#333' }}>About Me</Typography>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            {/* Left section containing an image */}
            <img src={About1} alt="Profile" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />
          </Grid>
          <Grid item xs={12} md={6} style={{ margin: 'auto' }}>
            {/* Right section containing the about me paragraph */}
            <Typography variant="body1" style={{ lineHeight: '1.6', color: '#555', textAlign: 'left', maxWidth: '100%' }}>
              Greetings! I'm Nikhil Chaudhary, a dynamic Web Developer and Creative Innovator with a fervent enthusiasm for crafting immersive digital experiences. Fuelled by a blend of creativity and technical prowess, I thrive in both Frontend and Backend realms, sculpting elegant user interfaces while engineering robust backend solutions. My journey in web development has been enriched by diverse experiences, from pioneering passion projects to collaborating on large-scale ventures. With a relentless drive for excellence and a penchant for pushing boundaries, I'm constantly exploring new technologies and methodologies to redefine the digital landscape. Let's embark on a journey of innovation together!
            </Typography>
          </Grid>
        </Grid>
      </Box>


      {/* Services Section */}
      <Box mt={20} bgcolor="lightblue" width="100%" p={3} pb={18}>
        <Typography variant="h4" align="center" gutterBottom mb={5}>
          My Services
          <Typography variant="body2" align="center">
            what i provide
          </Typography>
        </Typography>
        <Grid container spacing={5} justifyContent="center">
          {/* Frontend */}
          <Grid item>
            <Card style={{ width: '400px', height: '300px', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}>
              <CardMedia
                component="img"
                height="200"
                image={Service1}
                alt="Frontend"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">Frontend</Typography>
                <Typography variant="body2">HTML, CSS, JavaScript, React</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Backend */}
          <Grid item>
            <Card style={{ width: '400px', height: '300px', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}>
              <CardMedia
                component="img"
                height="200"
                image={Service2}
                alt="Backend"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">Backend</Typography>
                <Typography variant="body2">Node.js, Express, MongoDB</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Database */}
          <Grid item>
            <Card style={{ width: '400px', height: '300px', borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}>
              <CardMedia
                component="img"
                height="200"
                image={Service3}
                alt="Database"
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">Database</Typography>
                <Typography variant="body2">MySQL, MongoDB, SQL</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Skills Section */}
      <Box mt={10} width="70%" textAlign="center">
        <Typography variant="h4" fontWeight="bold" gutterBottom style={{ color: '#333', marginBottom: "50px" }}>My Skills</Typography>
        <Grid container spacing={3}>
          {/* Left section containing text */}
          <Grid item xs={12} md={6} style={{ textAlign: 'left', marginRight: '30px' }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom style={{ color: '#333' }}>My Creative skills</Typography>
            <Typography variant="body1" style={{ lineHeight: '1.6', color: '#555', textAlign: 'left', maxWidth: '100%' }}>
              Driven by an unrelenting passion for web development, I aspire to join a prestigious organization where I can leverage my skills to create impactful digital solutions. <br />
              With a commitment to lifelong learning and an eagerness to embrace new challenges, I am dedicated to continuously enhancing my expertise and staying at the forefront of technological advancements.
            </Typography>

            <Typography variant="h4" fontWeight="bold" gutterBottom style={{ color: '#333', marginTop: '20px' }}>Experience</Typography>
            <Typography variant="body1" style={{ lineHeight: '1.6', color: '#555', textAlign: 'left', maxWidth: '100%' }}>
              <strong>Internship at Tangential Ed. Power Pvt. Ltd:</strong><br />
              During my enriching internship at Tangential Ed. Power Pvt. Ltd, I played a pivotal role as a Full Stack Web Developer, where I immersed myself in every stage of the web development lifecycle. I led the design and implementation of a dynamic, responsive, and user-centric website, ensuring a seamless user experience through intuitive UI/UX design principles.<br /><br />
              One of the highlights of my experience was developing a robust CRUD (Create, Read, Update, Delete) application from scratch, showcasing my proficiency in both frontend and backend development. By leveraging technologies like React for the frontend and Node.js coupled with MongoDB for the backend, I engineered a scalable and efficient system that met the diverse needs of our users.
            </Typography>
            <Typography variant="body1" style={{ lineHeight: '1.6', color: '#555', textAlign: 'left', maxWidth: '100%' }}>
              Additionally, I collaborated closely with the design team to translate wireframes and mockups into interactive and visually stunning web interfaces. Through iterative development cycles and user feedback, I refined the UI to enhance usability and accessibility, resulting in a highly engaging digital platform.<br /><br />
              Beyond technical contributions, I actively participated in brainstorming sessions and team meetings, contributing innovative ideas and insights to drive continuous improvement and innovation within the organization. This experience not only honed my technical skills but also fostered a collaborative and growth-oriented mindset essential for success in the fast-paced world of web development.
            </Typography>


            <Button variant="contained" color="primary" style={{ marginTop: '20px', marginRight: '10px' }}>
              Visit Projects
            </Button>
            <Button variant="contained" color="primary" style={{ marginTop: '20px', marginRight: '10px' }} href="https://github.com/NikhilRoyal04" target="_blank" rel="noopener noreferrer" >
              GitHub
            </Button>
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }} href="https://www.linkedin.com/in/nikhil-chaudhary-12819a19a" target="_blank" rel="noopener noreferrer" >
              LinkedIn
            </Button>
          </Grid>

          {/* Right section containing progress bars */}
          <Grid item xs={12} md={5} mt={15}>
            {skills.map((skill, index) => (
              <Box key={index} mb={3}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body1" style={{ color: '#333' }}>{skill.name}</Typography>
                  <Typography variant="body1" style={{ color: '#333' }}>{`${skill.value}%`}</Typography>
                </Box>
                <LinearProgress variant="determinate" value={skill.value} sx={{ height: 10, borderRadius: 5, '& .MuiLinearProgress-bar': { backgroundColor: skill.color } }} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>


      {/* Contact Section */}

      <Box mt={10} width="90%" display="flex" justifyContent="center">
        <Box width="70%" textAlign="center" bgcolor="#f8f9fa" borderRadius="10px" p={4}>
          <Typography variant="h3" fontWeight="bold" gutterBottom style={{ color: '#333' }}>Get in Touch</Typography>
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
              {/* Submit Button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#1976D2' }}>Submit</Button>
              </Grid>
            </Grid>
          </form>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>
              <Typography variant="h6" fontWeight="bold" gutterBottom>Your response was sent successfully!</Typography>
            </DialogTitle>
            <DialogContent sx={{ textAlign: 'center' }}>

              <CheckCircleIcon sx={{ color: 'green', fontSize: 96 }} />
              <Typography variant="body1" fontWeight="bold">We will get back to you soon.</Typography>
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
