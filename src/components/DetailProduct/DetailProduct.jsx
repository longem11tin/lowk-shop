import React, { useState , useEffect } from 'react';
import { Card, Grid, CardMedia, CardContent, CardActions, Typography, IconButton, Container } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { useParams } from "react-router-dom";

import { commerce } from '../../lib/commerce';

import useStyles from './styles';

const DetailProduct = ({ onAddToCart }) => {

    let { productId } = useParams();
    console.log("long em" , productId);
    const [product, setProduct] = useState({});

    const fetchProduct = async (id) => {

        console.log('id ', id);

        commerce.products.retrieve(id).then((product) => console.log(product.name));
        const response = await commerce.products.retrieve(id);
        const { name, price, image , description } = response;
        console.log('response ' ,response);
        setProduct({ 
            id,
            name,
            price: price.formatted_with_symbol,
            image: image.url,
            description,
         });
    };

    useEffect(() => {
        // const id = window.location.pathname.split('/');
        // console.log(id[2]); 
        fetchProduct(productId);
    },[]);

    console.log('product ', product);

    console.log('Long EM IN DETAIL');

    const classes = useStyles();
    return (
        <>
            <Card style={{ border: 'solid 1px #000' , marginTop: '80px'}} className={classes.root} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={classes.cardContent}>
                                <Typography variant="h5" gutterBottom>
                                    {product.name}
                                </Typography>
                        </div>
                        <CardMedia className={classes.media} image={product.image} title={product.name}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardContent className={classes.cardContent}>
                            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className={classes.cardAction}>
                        <Typography variant="h5" gutterBottom>
                            {product.price}
                        </Typography>
                        <CardActions  >
                            <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id,1)}>
                                <AddShoppingCart />
                            </IconButton>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default DetailProduct;
