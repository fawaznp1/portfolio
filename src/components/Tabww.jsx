import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: '',
        width: '100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        color:'white'
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"

          sx={{
            '& .MuiTab-root': {
              color: 'black', // Tab text color (black)
            },
            '& .Mui-selected': {
              color: 'black', // Selected tab text color (black)
              backgroundColor: 'grey', // Change this to your desired background color
              borderRadius: '30px',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'black', // Indicator color (black)
            },
          }}
          
        >
          <Tab label="Skills" {...a11yProps(0)} />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label="Experience" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
    <li style={{ padding: '10px 0', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
      <i className="fab fa-react" style={{ marginRight: '10px', color: '#61DBFB' }}></i> REACT
    </li>
    <li style={{ padding: '10px 0', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
      <i className="fab fa-bootstrap" style={{ marginRight: '10px', color: '#563d7c' }}></i> Bootstrap
    </li>
    <li style={{ padding: '10px 0', fontSize: '18px' }}>
      <i className="fab fa-js" style={{ marginRight: '10px', color: '#F0DB4F' }}></i> JavaScript
    </li>
    <li style={{ padding: '10px 0', fontSize: '18px' }}>
      <i className="fab fa-html5" style={{ marginRight: '10px', color: '#e34c26' }}></i> HTML
    </li>
    <li style={{ padding: '10px 0', fontSize: '18px' }}>
      <i className="fab fa-css3-alt" style={{ marginRight: '10px', color: '#264de4' }}></i> CSS
    </li>
    <li style={{ padding: '10px 0', fontSize: '18px' }}>
      <i className="fab fa-node-js" style={{ marginRight: '10px', color: '#3C873A' }}></i> Node.js
    </li>
    <li style={{ padding: '10px 0', fontSize: '18px' }}>
      <i className="fas fa-database" style={{ marginRight: '10px', color: '#4DB33D' }}></i> MongoDB
    </li>
  </ul>
</TabPanel>

<TabPanel value={value} index={1} dir={theme.direction}>
  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
    <li style={{ padding: '10px 0', fontSize: '24px', fontWeight: 'bold' }}>
      Bachelor of Computer Application (BCA):
      <br />
      <span style={{ color: '#4caf50' }}>Kannur University</span>
      <br />
      <span style={{ fontSize: '20px' }}>2020-2023</span>
    </li>
    <li style={{ padding: '10px 0', fontSize: '24px', fontWeight: 'bold' }}>
      Plus Two:
      <br />
      <span style={{ color: '#4caf50' }}>Edayannur GHSS</span>
      <br />
      <span style={{ fontSize: '20px' }}>2018-2020</span>
    </li>
    <li style={{ padding: '10px 0', fontSize: '24px', fontWeight: 'bold' }}>
      SSLC:
      <br />
      <span style={{ color: '#4caf50' }}>Koodali HSS</span>
      <br />
      <span style={{ fontSize: '20px' }}>2017-2018</span>
    </li>
  </ul>
</TabPanel>

<TabPanel value={value} index={2} dir={theme.direction}>
  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
    <li style={{ padding: '10px 0', fontSize: '28px', fontWeight: 'bold', color: '#00ffff' }}>
      MERN Stack Developer Intern:
      <br />
      <span style={{ color: '#3f51b5' }}>Luminar Technolab, Kochi</span>
      <br />
      <span style={{ fontSize: '24px' }}>6 Months</span>
    </li>
  </ul>
</TabPanel>

    </Box>
  );
}
