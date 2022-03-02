import React, { useState } from 'react'
import Products from "../components/Products";
import SearchFilterProductBar from '../components/SearchFilterProductBar';
import { ProductShopContainer } from '../styling/productShopStyling';
import { SharedParagraph, SharedTitle } from '../styling/sharedStyling';


const ProductsShop = ({ itemsAddedToCartList, addItemToCart, availableStock }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortingOptionList, setSortingOptionList] = useState("");

    // Choose the sorting option from the dropdown list
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

    // Search product by typing name
    const handleChangeSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const resetAllFilters = () => {
        setSortingOptionList("");
    }

    return (
        <>
            <SharedTitle>Shop our products</SharedTitle>
            <SharedParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores placeat laborum culpa tempore, optio rerum molestias! Accusantium, dolor tempore.
            </SharedParagraph>
            <SearchFilterProductBar handleChangeSearch={handleChangeSearch} handleSortingOptions={handleSortingOptions} resetAllFilters={resetAllFilters} />
            <ProductShopContainer>
                <Products itemsAddedToCartList={itemsAddedToCartList} addItemToCart={addItemToCart} availableStock={availableStock} searchTerm={searchTerm} sortingOptionList={sortingOptionList} />
            </ProductShopContainer>
        </>
    )
}

export default ProductsShop
