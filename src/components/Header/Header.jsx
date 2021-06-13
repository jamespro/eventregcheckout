import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, Typography } from '@material-ui/core/';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
            <Link color="inherit" href="/">
                Mystery Convention 2021 - Attendee Registration 
            </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
