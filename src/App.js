import React, { useState } from "react";
import AlertInformationNavbar from "./components/AlertInformationNavbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import ProductsShop from "./pages/ProductsShop";
import { products } from "./data";

const App = () => {
  const [itemsAddedToCartList, setItemsAddedToCartList] = useState([]);
  const [finalPriceCount, setFinalPriceCount] = useState(0);
  
  const addItemToCart = (addedProduct) => {
    let baseAddedAmount = 1;
    let totalAmount = 0;
    let newProductInCart = {id: addedProduct.id, price: addedProduct.price, amount: baseAddedAmount, stock: addedProduct.stock - 1};
    console.log(checkIfRepeatedInCart(addedProduct.id))
    if (!checkIfRepeatedInCart(addedProduct.id)) {
      setItemsAddedToCartList([...itemsAddedToCartList, newProductInCart]);
      setFinalPriceCount(finalPriceCount + addedProduct.price)
     } else {

    }

    }
 

    const checkIfRepeatedInCart = (index) => {
      let repeatedItemInCart = itemsAddedToCartList.find((product)=> product.id === index);
      return repeatedItemInCart;
    }   

  const deleteItemCart = (index) => {
    const newProductCartList = itemsAddedToCartList.filter(product => product.id !== index)
    let finalPrice = finalPriceCount;
    finalPrice = finalPrice - 25
    setItemsAddedToCartList(newProductCartList);
    setFinalPriceCount(finalPrice);
    console.log()
  }

  return (
    <>
      <Router>
        <Navbar itemsAddedToCartList={itemsAddedToCartList} />
        <AlertInformationNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart itemsAddedToCartList={itemsAddedToCartList}
              finalPriceCount={finalPriceCount}
              deleteItemCart={deleteItemCart}/>
            }
          />
          <Route path="/contact" element={<Form />} />
          <Route
            path="/products"
            element={
              <ProductsShop
                itemsAddedToCartList={itemsAddedToCartList}
                addItemToCart={addItemToCart}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
