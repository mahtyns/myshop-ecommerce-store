import React from 'react'
import { SearchFilterProductContainer, SearchFilterWrapper } from '../styling/productShopStyling'

const SearchFilterProductBar = ({ handleChangeSearch }) => {
    return (
        <SearchFilterProductContainer>
            <SearchFilterWrapper>
                <input placeholder='Search...' type="text" onChange={handleChangeSearch} />
                <p> Sort by: </p>
                <select>
                    <option>Price</option>
                    <option>Name</option>
                </select>
                <p>Filter</p>
            </SearchFilterWrapper>
        </SearchFilterProductContainer>
    )
}

export default SearchFilterProductBar