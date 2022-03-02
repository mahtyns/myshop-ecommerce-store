import React, { useState } from 'react'
import Products from "../components/Products";
import SearchFilterProductBar from '../components/SearchFilterProductBar';
import { ProductShopContainer } from '../styling/productShopStyling';
import { SharedParagraph, SharedTitle } from '../styling/sharedStyling';


const ProductsShop = ({ itemsAddedToCartList, addItemToCart, availableStock }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortingOptionList, setSortingOptionList] = useState("");

    const handleSortingOptions = (event) => {
        if (event.target.value === "name") {
            setSortingOptionList("name");
        }
        else if (event.target.value === "price") {
            setSortingOptionList("price")
        }
        else {
            setSortingOptionList("");
        }
    }


    const handleChangeSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <>
            <SharedTitle>Shop our products</SharedTitle>
            <SharedParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores placeat laborum culpa tempore, optio rerum molestias! Accusantium, dolor tempore.
            </SharedParagraph>
            <SearchFilterProductBar handleChangeSearch={handleChangeSearch} handleSortingOptions={handleSortingOptions} />
            <ProductShopContainer>
                <Products itemsAddedToCartList={itemsAddedToCartList} addItemToCart={addItemToCart} availableStock={availableStock} searchTerm={searchTerm} />
            </ProductShopContainer>
        </>
    )
}

export default ProductsShop
