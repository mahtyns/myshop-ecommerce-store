import styled from 'styled-components';
import { SummaryTotalContainer, PaySummary, TotalPriceSummary, DeliveryOptionsContainer, SummaryBuyButton, TotalSummaryInfo } from '../styling/userCartStyling';

const ShopSummary = () => {
    return (
        <SummaryTotalContainer>
            <PaySummary>
                <TotalPriceSummary>Total: 0€</TotalPriceSummary>
                <TotalSummaryInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio molestias corrupti numquam quisquam quae itaque harum hic temporibus quibusdam?</TotalSummaryInfo>
                <SummaryBuyButton>Continue</SummaryBuyButton>
            </PaySummary>
            <DeliveryOptionsContainer>Delivery Options</DeliveryOptionsContainer>
        </SummaryTotalContainer>
    )
}

export default ShopSummary
