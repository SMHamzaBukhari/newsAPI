import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsIcon from '@mui/icons-material/Sports';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Headlines from './headlines';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Sports from './sports';
import  ArticleIcon  from '@mui/icons-material/Article';
import OneNews from './oneNews';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [routeList, setRouteList] = React.useState([
    {
      routeName: 'Global News',
      ListItemIcon: <NewspaperIcon/>,
      route: '/'
    },
    {
      routeName: 'Sports News',
      ListItemIcon: <SportsIcon/>,
      route: '/sports'
    },
    {
      routeName: 'One News',
      ListItemIcon: <ArticleIcon/>,
      route: '/onenews',
    }
  ]);
  const navigate = useNavigate();
  const MoveToRoute = (route) =>{
      navigate(route);
  } 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {routeList.map((text, index) => (
          <ListItem onClick={()=>{MoveToRoute(text.route)}} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.ListItemIcon}    
              </ListItemIcon>
              <ListItemText primary={text.routeName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='appbar' variant="h6" noWrap component="div">
            NEWS API APP
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className='container-routes'>
         <Routes>
           <Route path='/' element={<Headlines/>}/>
           <Route path='/sports' element={<Sports/>}/>
           <Route path='/onenews' element={<OneNews/>}/>
         </Routes>
        </div>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
