import React from 'react'
import { SearchFilterProductContainer, SearchFilterWrapper, SearchProductInput, SortProductDropdown } from '../styling/productShopStyling'

const SearchFilterProductBar = ({ handleChangeSearch, handleSortingOptions, resetAllFilters }) => {
    return (
        <SearchFilterProductContainer>
            <SearchFilterWrapper>
                <SearchProductInput placeholder='Search...' type="text" onChange={handleChangeSearch} />
                <SortProductDropdown onChange={handleSortingOptions}>
                    <option>Sort By:</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </SortProductDropdown>
                <p>Filter</p>
                <p onCLick={resetAllFilters}>Reset</p>
            </SearchFilterWrapper>
        </SearchFilterProductContainer>
    )
}

export default SearchFilterProductBar