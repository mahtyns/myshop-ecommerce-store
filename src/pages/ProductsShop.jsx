import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Products from "../components/Products";
import SearchFilterProductBar from '../components/SearchFilterProductBar';
import { ProductShopContainer } from '../styling/productShopStyling';
import { SharedParagraph, SharedTitle } from '../styling/sharedStyling';


const ProductsShop = ({ itemsAddedToCartList, addItemToCart, availableStock }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortingOptionList, setSortingOptionList] = useState("");

    const chooseSortingOptionFromDropdownList = (event) => {
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

    const searchProductByTyping = (event) => {
        setSearchTerm(event.target.value)
    }

    const resetAllFilters = () => {
        setSortingOptionList('');
    }

    return (
        <>
            <SharedTitle>Shop our products</SharedTitle>
            <SharedParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores placeat laborum culpa tempore, optio rerum molestias! Accusantium, dolor tempore.
            </SharedParagraph>
            <SearchFilterProductBar searchProductByTyping={searchProductByTyping} chooseSortingOptionFromDropdownList={chooseSortingOptionFromDropdownList} resetAllFilters={resetAllFilters} />
            <ProductShopContainer>
                <Products itemsAddedToCartList={itemsAddedToCartList} addItemToCart={addItemToCart} availableStock={availableStock} searchTerm={searchTerm} sortingOptionList={sortingOptionList} />
            </ProductShopContainer>
        </>
    )
}


ProductsShop.propTypes = {
    itemsAddedToCartList: PropTypes.array,
    addItemToCart: PropTypes.func,
    availableStock: PropTypes.number,
}

export default ProductsShop
