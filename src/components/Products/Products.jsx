import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Product from './Product/Product';

import useStyles from './styles';

const Products = ({products , onAddToCart}) => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Typography variant='h5' className={classes.title}>Products</Typography>
            <Grid container justify="center" spacing={4} >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}> 
                        <Product style={{textDecoration: 'none'}} product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
            {/* {console.log(products)} */}
        </main>
    ); 
}

export default Products;
