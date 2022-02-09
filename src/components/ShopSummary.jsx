import styled from 'styled-components';
import { deliveryOptions } from '../data';
import { SharedParagraph } from '../styling/sharedStyling';
import { SummaryTotalContainer, PaySummary, TotalPriceSummary, DeliveryOptionsContainer, SummaryBuyButton, TotalSummaryInfo, DeliveryOptionsSelect } from '../styling/userCartStyling';
import { Link } from "react-router-dom";

const ShopSummary = ({ finalPriceCount }) => {
    return (
        <SummaryTotalContainer>
            <PaySummary>
                <TotalPriceSummary>Total: {finalPriceCount} €</TotalPriceSummary>
                <TotalSummaryInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio molestias corrupti numquam quisquam quae itaque harum hic temporibus quibusdam?</TotalSummaryInfo>
                <Link to="/checkout"><SummaryBuyButton>Continue</SummaryBuyButton></Link>
            </PaySummary>
            <DeliveryOptionsContainer>Delivery Options
                <SharedParagraph>Choose one delivery option from below:</SharedParagraph>
                <DeliveryOptionsSelect>
                    {deliveryOptions.map(option =>
                        <option value={option.title}>{option.title}, {option.price} €</option>
                    )}
                </DeliveryOptionsSelect>
            </DeliveryOptionsContainer>
        </SummaryTotalContainer >
    )
}

export default ShopSummary
