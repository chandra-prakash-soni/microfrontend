import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#000000',
    fontWeight: 700,
    fontSize: '1.6rem',
    letterSpacing: '0.5px',
  },
  appBar: {
    boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
    backgroundColor: theme.palette.primary.main,
  },
  signInButton: {
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '20px',
    padding: '6px 16px',
    textTransform: 'none',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#ffffff22',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const handleSignInClick = () => {
    console.log('Sign In button clicked');
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
         
          to="/"
          className={classes.title}
        >
          MyApp
        </Typography>

        <Button
          className={classes.signInButton}
          onClick={handleSignInClick}
        >
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
