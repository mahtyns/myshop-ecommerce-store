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
import ProductsCatalogTest from "./pages/ProductsCatalogTest";


const App = () => {

  const [productCatalogList, setProductCatalogList] = useState([]);
  const [itemsAddedToCartList, setItemsAddedToCartList] = useState([]);
  const [finalPriceCount, setFinalPriceCount] = useState(0);
  const [itemsCartNumber, setItemsCartNumber] = useState(0);

  const getProductsFromDB = async () => {
      try {
        const response = await fetch("http://localhost:5000/products", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const responseToJsonData = await response.json();
        setProductCatalogList(responseToJsonData);

      } catch (error) {
        console.error(error.message);
      }
  };

  useEffect(() => {
    getProductsFromDB();
  }, [])

  const getProductsInCart = async () => {
      try {
        const response = await fetch("http://localhost:5000/cart-products", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const responseToJsonData = await response.json();

        setItemsAddedToCartList(responseToJsonData)
      } catch (error) {
        console.error(error.message);
      }
  };

  useEffect(() => {
    getProductsInCart();
  }, [])

     // Before adding serverside
  // const addItemToCart = (addedProduct) => {
  //   let addedMultipleIndex = itemsAddedToCartList.findIndex(product => product.id === addedProduct.id);
  //   let newProductInCart = {name: addedProduct.name, id: addedProduct.id, price: addedProduct.price, amount: 1, stock: addedProduct.stock};
  //   if (!checkIfRepeatedInCart(addedProduct.id)) {
  //     setItemsAddedToCartList([...itemsAddedToCartList, newProductInCart]);
  //     setFinalPriceCount(finalPriceCount + addedProduct.price );
  //     setItemsCartNumber(itemsCartNumber + 1);
  //     addedProduct.stock -= 1;
  //     } else {
  //     itemsAddedToCartList[addedMultipleIndex].amount += 1;
  //     setFinalPriceCount(finalPriceCount + itemsAddedToCartList[addedMultipleIndex].price );
  //     setItemsCartNumber(itemsCartNumber + 1);
  //     addedProduct.stock -= 1;
  //     }
  //     console.log(itemsCartNumber)
  //   }

    const getItemFromCatalog = async ({product}) => {
      try {
        const response = await fetch(`http://localhost:5000/products/${product.product_id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const responseToJsonData = await response.json();
        console.log(getItemFromCatalog)
      } catch (error) {
        console.error(error.message);
      }
    }

    const addItemToCart = async (addedProduct) => {

        console.log(JSON.stringify(addedProduct))

      try {
        const {body} =  addedProduct ;
        const response = await fetch("http://localhost:5000/cart-products", {
          method: "POST",
          headers: { 
          'Accept': 'application/json',
          "Content-Type": "application/json" },
        });


        setItemsAddedToCartList([...itemsAddedToCartList, response])
      } catch (error) {
        console.error(error.message);
      }
           
      //   console.log(addedProduct)
      //   console.log(itemsAddedToCartList)

    }

           // let addedMultipleProductIndex = itemsAddedToCartList.findIndex(product => product.id === addedProduct.product_id);
      // let newProductAddedToCart = {name: addedProduct.product_name, id: addedProduct.product_id, price: addedProduct.product_price, amount: 1 }
      //  if (!checkIfRepeatedInCart(addedProduct.product_id)) {
      //       setItemsAddedToCartList([...itemsAddedToCartList, newProductAddedToCart]);
      //       setFinalPriceCount(finalPriceCount + addedProduct.product_price);
      //       setItemsCartNumber(itemsCartNumber + 1);
      //     } else {
      //       itemsAddedToCartList[addedMultipleProductIndex].amount += 1;
      //       setFinalPriceCount(finalPriceCount + itemsAddedToCartList[addedMultipleProductIndex].price );
      //       setItemsCartNumber(itemsCartNumber + 1);
      //     }


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
          <Route path="/catalog" element={<ProductsCatalogTest productCatalogList={productCatalogList} addItemToCart={addItemToCart}/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
