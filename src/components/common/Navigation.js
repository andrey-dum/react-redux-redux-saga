import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, Grid } from '@material-ui/core';
import NavItem from './NavItem';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export const Navigation = ({ loading, services }) => {

    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>
              { loading || !services ? (
                  <Grid container justify='center'>
                      <CircularProgress />
                  </Grid>
              ) : (
                services.map(({ id, jobId, title }) => (
                    // <ListItem button key={id}>
                    //     <ListItemText primary={title} />
                    // </ListItem>
                    <NavItem key={id} jobId={jobId} title={title} id={id} />
                ))
              )
            }
          </List>
        </div>
      );

      const container = () => document.body
    //   const container = window !== undefined ? () => window().document.body : undefined;
    

    return (
        <>
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
            <Typography variant="h6" noWrap>
                Responsive drawer
            </Typography>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
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
        
        </>
    )
}