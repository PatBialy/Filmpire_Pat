import { ClassNames } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';
import useStyles from './styles';

const Profile = () => {
  const classes = useStyles();
  const { user } = useSelector(userSelector);
  console.log(user);
  return (
    <div className={classes.yo}>
      Profile - {user.username}
    </div>
  );
};

export default Profile;
