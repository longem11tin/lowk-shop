import React , { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseLine } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import DetailProduct from './components/DetailProduct/DetailProduct';
import Footer from './components/Footer/Footer';

import { commerce } from './lib/commerce';


function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart , setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  
  const fetchProducts = async() => {
    
    const { data } = await commerce.products.list()

    setProducts(data);
  }

  const fetchCart = async () => {

    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async(productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});

    setCart(cart);
  }

  const handleRemoveCart= async (productId) => {
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();

    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen); 

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
        <Switch>
          <Route exact path='/'>
            <Banner />
            <Blogs products={products} onAddToCart={handleAddToCart} />
            <Products products={products} onAddToCart={handleAddToCart}/>
            <Footer />
          </Route>
          <Route exact path='/cart/'>
            <Cart cart={cart} handleEmptyCart={handleEmptyCart} handleRemoveCart={handleRemoveCart} handleUpdateCartQuantity={handleUpdateCartQuantity}/>
          </Route>
          <Route exact path='/checkout'>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
          <Route exact path='/product/:productId' >
            <DetailProduct onAddToCart={handleAddToCart} />
          </Route>
          {/* {products.map((product) => (
              <Route exact path={`/product/${product.id}`}>
                    {console.log(product)}
                    <h1>Detail Product</h1>
                    <DetailProduct product={product} onAddToCart={handleAddToCart}/>
              </Route>
          ))} */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
