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

const App = () => {
  const [itemsAddedToCartList, setItemsAddedToCartList] = useState([]);
  const [finalPriceCount, setFinalPriceCount] = useState(0);
  const [itemsCartNumber, setItemsCartNumber] = useState(0);


  const addItemToCart = (addedProduct) => {
    let addedMultipleIndex = itemsAddedToCartList.findIndex(product => product.id === addedProduct.id);
    let newProductInCart = {id: addedProduct.id, price: addedProduct.price, amount: 1};
    if (!checkIfRepeatedInCart(addedProduct.id)) {
      setItemsAddedToCartList([...itemsAddedToCartList, newProductInCart]);
      setFinalPriceCount(finalPriceCount + addedProduct.price );
     } else {
      itemsAddedToCartList[addedMultipleIndex].amount += 1;
      setFinalPriceCount(finalPriceCount + itemsAddedToCartList[addedMultipleIndex].price )
      setItemsCartNumber(itemsCartNumber + 1)
      }
      console.log(itemsCartNumber)
    }

    // const totalAmountProductsCart = (addedProductAmount) => {
    //   let totalCartAmount = 0;
    //   totalCartAmount += addedProductAmount;
    //   console.log(totalCartAmount)
    // }
 

    const checkIfRepeatedInCart = (index) => {
      let repeatedItemInCart = itemsAddedToCartList.find((product)=> product.id === index);
      return repeatedItemInCart;
    }   

  const deleteItemCart = (addedProduct) => {
    const newProductCartList = itemsAddedToCartList.filter(product => product.id !== addedProduct.id)
    setItemsAddedToCartList(newProductCartList);
    setFinalPriceCount(finalPriceCount - (addedProduct.price * addedProduct.amount));
  }

  const addOneProductCart = (addedProduct) => {
      addedProduct.amount += 1;
      setFinalPriceCount(finalPriceCount + addedProduct.price)
  }

  const removeOneProductCart = (addedProduct) => {
    if (addedProduct.amount === 1) {
      deleteItemCart(addedProduct);
    }
    addedProduct.amount -= 1;
    setFinalPriceCount(finalPriceCount - addedProduct.price)
  }

  return (
    <>
      <Router>
        <Navbar itemsAddedToCartList={itemsAddedToCartList}
        finalPriceCount = {finalPriceCount} />
        <AlertInformationNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart itemsAddedToCartList={itemsAddedToCartList}
              finalPriceCount={finalPriceCount}
              deleteItemCart={deleteItemCart}
              addOneProductCart={addOneProductCart}
              removeOneProductCart={removeOneProductCart}
              />
            }
          />
          <Route path="/contact" element={<Form />} />
          <Route
            path="/products"
            element={
              <ProductsShop
                itemsAddedToCartList={itemsAddedToCartList}
                addItemToCart={addItemToCart}
                // availableStock={availableStock}
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
