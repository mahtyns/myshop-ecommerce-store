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
  // const [stock, setStock] = useState(products.stock);

  const addItemToCart = (event) => {
    const id = event.target.id;
    setItemsAddedToCartList([...itemsAddedToCartList, {id: id, price: products[id].price, name: products[id].name}]);
    setFinalPriceCount(updateFinalPrice());
  
  };

  const updateFinalPrice = () => {
      let finalPrice = finalPriceCount;
      itemsAddedToCartList.forEach(item => {
       finalPrice += item.price;
      })
      return finalPrice;

  }

  const showAuxiliary = () => {
    console.log(typeof finalPriceCount);
    console.log(finalPriceCount)

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
              finalPriceCount={finalPriceCount} />
            }
          />
          <Route path="/contact" element={<Form />} />
          <Route
            path="/products"
            element={
              <ProductsShop
                itemsAddedToCartList={itemsAddedToCartList}
                addItemToCart={addItemToCart}
                showAuxiliary={showAuxiliary}
           
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
