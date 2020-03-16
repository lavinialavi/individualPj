import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import menuBarList from '../menuBarList'
import Project from './Project';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Blog from './Blog';
import Layout from './Layout'
import '../../node_modules/video-react/dist/video-react.css';
import { Container } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const drawerWidth = 130;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content:{
    [theme.breakpoints.up('sm')]: {
      width:  `calc(100% - ${drawerWidth}px)`,
     margiLeft: drawerWidth, 
    },
    [theme.breakpoints.up('xs')]: {
      paddingTop : 60,
      flexGrow:1,
  }
},
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
  },
}));
function MainNav(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {menuBarList.map((item, index) => (
          <ListItem button key={index}>
            <ListItem button component={Link} to={item.link}>
            <Link to={menuBarList.link}></Link>
            <ListItemText primary={item.name} />
          </ListItem>
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Layout>
<Container className='my-20'>
<Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/project" component={Project}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
         </Switch>
      </Container>
    </Layout>
      </div>
  );
}



MainNav.propTypes = {
  container: PropTypes.any,
};

export default MainNav;