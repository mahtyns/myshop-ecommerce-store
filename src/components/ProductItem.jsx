import styled from 'styled-components';
import { useState } from 'react';
import { CardGiftcardRounded } from '@material-ui/icons';
import { ProductItemContainer, ProductItemImage, ProductInfo, ProductName, ProductPrice, ProductDescr, AddCartButton, ProductStock } from '../styling/productShopStyling';

const Product = ({ product, ...props }) => {

    const ButtonContainer = <AddCartButton onClick={() => { props.addItemToCart(product) }}>Add to cart</AddCartButton>

    return (
        <ProductItemContainer data-id={product.id} data-category={product.category}>
            <ProductItemImage src={product.img} />
            <ProductInfo>
                <ProductName>
                    {product.name}
                </ProductName>
                <ProductPrice>{product.price}€</ProductPrice>
                <ProductDescr>{product.text}</ProductDescr>
                {/* {stock ? <Stock>Left: {stock}</Stock> : null} */}
                <ProductStock>Left: {product.stock}</ProductStock>
            </ProductInfo>

            {/* {stock ? ButtonContainer : null} */}
            {ButtonContainer}
        </ProductItemContainer>
    )
}

export default Product;
