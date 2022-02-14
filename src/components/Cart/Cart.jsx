import React from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';

import useStyles from './styles';

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveCart, handleEmptyCart }) => {

    const classes = useStyles();

    const emptyCart = !cart.total_items;

    const EmptyCart = () => (
        <Typography variant="h5">You don't have anything in your Bag. Back to shop
            <Link to="/" className={classes.link}>Add Some!</Link>
        </Typography>
    ); 

    if (!cart.line_items) return 'Loading';

    const FilledCart = () => (
        <>
            <Grid container spacing={4}>
            {cart.line_items.map((lineItem) => (
                <Grid item xs={12} sm={4} key={lineItem.id}>
                    <CartItem item={lineItem} handleUpdateCartQuantity={handleUpdateCartQuantity} handleRemoveCart={handleRemoveCart}/>
                </Grid> 
            ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button onClick={handleEmptyCart} type="button" size="large" variant="contained" color="secondary" className={classes.emptyButton}>Empty Cart</Button>
                    <Button component={Link} to='/checkout'type="button" size="large" variant="contained" color="primary" className={classes.checkoutButton}>Checkout</Button>
                </div>
            </div>
        </>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4">
                Your Shopping Cart 
            </Typography>
            {emptyCart ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
