import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Blog from './Blog/Blog';

import useStyles from './styles';

const Blogs = ({products , onAddToCart}) => {
  
    const classes = useStyles();

    return (
        <>
        <Typography className={classes.titleFirst} variant='h3'>Welcome to the LowK-Shop national website</Typography>
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Typography variant='h5' className={classes.title}>News</Typography>
            <Grid container justify="center" spacing={4} >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}> 
                        <Blog style={{textDecoration: 'none'}} product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
        </>
    ); 
}

export default Blogs;
