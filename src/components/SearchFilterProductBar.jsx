import React from 'react'
import { SearchFilterProductContainer, SearchFilterWrapper } from '../styling/productShopStyling'

const SearchFilterProductBar = () => {
    return (
        <SearchFilterProductContainer>
            <SearchFilterWrapper>
                <input />
                <select>
                    <option>Price</option>
                    <option>Name</option>
                </select>
            </SearchFilterWrapper>
        </SearchFilterProductContainer>
    )
}

export default SearchFilterProductBar