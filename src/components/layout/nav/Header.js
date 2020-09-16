import React from 'react';
import { Link } from 'react-router-dom';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="secondary.main">
                <Link to={'/'} className="bar-link" >
                    <a href="#" className="bar-link">Logo</a>
                </Link>
                <Link to={'/products/news'} className="bar-link" >ADD PRODUCT</Link>
            </Typography>
            </Toolbar>
        </AppBar>
    )
}