import React from 'react';
import { Card, CardMedia, CardActions, Typography, Button, CardContent } from '@material-ui/core';

import useStyles from './styles'

const CartItem = ({ item , handleUpdateCartQuantity, handleRemoveCart }) => {

    const onUpdateQuantity = (lineItemId, newQuantity) => handleUpdateCartQuantity(lineItemId, newQuantity);

    const onRemoveCart = (lineItemId) => handleRemoveCart(lineItemId);

    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.id} className={classes.media}/>
            <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h5">{item.price.formatted_with_symbol}</Typography>
            </CardContent> 
            <CardActions className={classes.cardActions}>
                <div className={classes.button}>
                    <Button type="button" size="small" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Typography variant="h5">{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button color="secondary" variant="contained" type="button" onClick={() => onRemoveCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;
