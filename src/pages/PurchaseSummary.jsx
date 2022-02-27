import React from 'react';
import { CartCheckoutContainer, PurchaseCheckoutPageContainer, TotalPriceSummaryContainer, ConfirmPurchaseContainer } from '../styling/purchaseSummaryStyling';
import { SharedSecondaryText, SharedSubtitle, SharedTitle } from '../styling/sharedStyling';


const PurchaseSummary = ({ itemsAddedToCartList, finalPriceCount, deliveryOption }) => {
    return (
        <PurchaseCheckoutPageContainer>
            <SharedTitle>Checkout</SharedTitle>
            <CartCheckoutContainer>
                <TotalPriceSummaryContainer>
                    <SharedSecondaryText>
                        {itemsAddedToCartList.map((item, index) =>
                            <p>{index + 1} - Product: {item.name} - Price: {item.price} € - Amount: {item.amount} - Total: {item.price * item.amount} € </p>
                        )}
                        <p>Total Price Products: {finalPriceCount} €</p>
                        <p>Delivery type: {deliveryOption.title} </p>
                        <p>Delivery price: {deliveryOption.price} €</p>
                        <SharedSubtitle>Final Price: </SharedSubtitle>
                    </SharedSecondaryText>
                </TotalPriceSummaryContainer>
                <ConfirmPurchaseContainer></ConfirmPurchaseContainer>
            </CartCheckoutContainer>
        </PurchaseCheckoutPageContainer>
    );
};

export default PurchaseSummary;
