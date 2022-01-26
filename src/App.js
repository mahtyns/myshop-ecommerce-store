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
  const [addedProductAmount, setAddedProductAmount] = useState(1);
  const [itemsAddedToCartList, setItemsAddedToCartList] = useState([]);
  const [finalPriceCount, setFinalPriceCount] = useState(0);
  
  const addItemToCart = (event) => {
    const id = event.target.id;
    multiplyProductAddedAmount(id)
    setItemsAddedToCartList([...itemsAddedToCartList, {id: id, price: products[id].price, amount: addedProductAmount, }]);
    updateFinalPrice();
     };

  const multiplyProductAddedAmount = (index) => {
    let checkIfExist = itemsAddedToCartList.find((product)=> product.id === index)
    if (checkIfExist) {
      return true;
      // let addProduct = addedProductAmount + 1;
      // setAddedProductAmount(addProduct);
    } else return;

  }   

  const updateFinalPrice = () => {
      let finalPrice = 0;
      itemsAddedToCartList.forEach(item => {
       finalPrice = finalPrice + item.price;
      });
      setFinalPriceCount(finalPrice);
    
  }

  const deleteItemCart = (index) => {
    const newProductCartList = itemsAddedToCartList.filter(product => product.id !== index)
    let finalPrice = finalPriceCount;
    finalPrice = finalPrice - 25
    setItemsAddedToCartList(newProductCartList);
    setFinalPriceCount(finalPrice);
    console.log()
  }

  const showAuxiliary = () => {
   
    

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
              addedProductAmount={addedProductAmount} 
              multiplyProductAddedAmount={multiplyProductAddedAmount}
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
