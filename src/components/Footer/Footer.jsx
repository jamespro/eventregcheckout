import React from 'react';
import { Link, Typography } from '@material-ui/core/';

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}&nbsp; 
      <Link color="inherit" href="https://eventregi.herokuapp.com/">
        Event Registration 
      </Link>
    </Typography>
  );
}
