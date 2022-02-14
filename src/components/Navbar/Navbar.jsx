import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link , useLocation } from 'react-router-dom';

import useStyles from './styles';

import logo from '../../assets/LongLowK.png';

const NavBar = ({ totalItems }) => {

    const location = useLocation();
    const classes = useStyles();
    
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to='/' variant="h6" color="inherit" className={classes.title}>
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
                        Long LowK
                    </Typography>
                    <div className={classes.grow}/>
                    {(location.pathname !== '/cart' || location.pathname !== '/checkout') && (
                    <div className={classes.button}>
                        <IconButton component={Link} to={`/cart`} aria-label='Show cart Items' color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;
