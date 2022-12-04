import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';
import useStyles from './styles';

const Profile = () => {
  const classes = useStyles();
  const { user } = useSelector(userSelector);
  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  console.log(user);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" className={classes.yo}>
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? <Typography variant="h5">Add Favorites Or Watchlist Movies To See Them Here!</Typography> : <Box>Favorite Movies</Box>}
    </Box>
  );
};

export default Profile;
