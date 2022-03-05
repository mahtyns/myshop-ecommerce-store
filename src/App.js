import React, { useState, useEffect } from "react";
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
import PurchaseSummary from "./pages/PurchaseSummary";
import { products } from '../src/data';


const App = () => {
  const [itemsAddedToCartList, setItemsAddedToCartList] = useState([]);
  const [finalPriceCount, setFinalPriceCount] = useState(0);
  const [itemsCartNumber, setItemsCartNumber] = useState(0);


  const addItemToCart = (addedProduct) => {
    let addedMultipleIndex = itemsAddedToCartList.findIndex(product => product.id === addedProduct.id);
    let newProductInCart = {name: addedProduct.name, id: addedProduct.id, price: addedProduct.price, amount: 1, stock: addedProduct.stock};
    if (!checkIfRepeatedInCart(addedProduct.id)) {
      setItemsAddedToCartList([...itemsAddedToCartList, newProductInCart]);
      setFinalPriceCount(finalPriceCount + addedProduct.price );
      setItemsCartNumber(itemsCartNumber + 1);
      addedProduct.stock -= 1;
      } else {
      itemsAddedToCartList[addedMultipleIndex].amount += 1;
      setFinalPriceCount(finalPriceCount + itemsAddedToCartList[addedMultipleIndex].price );
      setItemsCartNumber(itemsCartNumber + 1);
      addedProduct.stock -= 1;
      }
      console.log(itemsCartNumber)
    }

    const checkIfRepeatedInCart = (index) => {
      let repeatedItemInCart = itemsAddedToCartList.find((product)=> product.id === index);
      return repeatedItemInCart;
    }   

  const deleteItemCart = (addedProduct) => {
    const newProductCartList = itemsAddedToCartList.filter(product => product.id !== addedProduct.id)
    setItemsAddedToCartList(newProductCartList);
    setFinalPriceCount(finalPriceCount - (addedProduct.price * addedProduct.amount));
    setItemsCartNumber(itemsCartNumber - addedProduct.amount);
    products[addedProduct.id].stock += addedProduct.amount
  }

  const addOneProductCart = (addedProduct) => {
      addedProduct.amount += 1;
      products[addedProduct.id].stock -= 1;
      setFinalPriceCount(finalPriceCount + addedProduct.price);
      setItemsCartNumber(itemsCartNumber + 1);

   }

  const removeOneProductCart = (addedProduct) => {
    if (addedProduct.amount === 1) {
      deleteItemCart(addedProduct);
    }
    addedProduct.amount -= 1;
    setFinalPriceCount(finalPriceCount - addedProduct.price)
    setItemsCartNumber(itemsCartNumber - 1);
    products[addedProduct.id].stock += 1;
  }

   const [deliveryOptionId, setDeliveryOptionId] = useState({});

    const chooseDeliveryOption = (e) => {
        setDeliveryOptionId(e.target.value); 
     }

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar itemsAddedToCartList={itemsAddedToCartList}
        finalPriceCount = {finalPriceCount}
        itemsCartNumber={itemsCartNumber} />
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
              chooseDeliveryOption={chooseDeliveryOption}
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
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<PurchaseSummary 
          itemsAddedToCartList={itemsAddedToCartList}
          finalPriceCount={finalPriceCount}
          deliveryOptionId={deliveryOptionId} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
