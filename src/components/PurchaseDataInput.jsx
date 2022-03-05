import React from 'react'
import { PurchaseUserDataContainer, PurchaseUserDataInput, PurchaseUserDataLabel } from '../styling/purchaseSummaryStyling'
import { SharedCTAButton } from '../styling/sharedStyling'

const PurchaseDataInput = () => {
    return (
        <PurchaseUserDataContainer>
            <PurchaseUserDataLabel>Name</PurchaseUserDataLabel>
            <PurchaseUserDataInput placeholder={"Your name"} type={"text"} required />
            <PurchaseUserDataLabel>Surname</PurchaseUserDataLabel>
            <PurchaseUserDataInput placeholder={"Your surname"} />
            <PurchaseUserDataLabel>Email</PurchaseUserDataLabel>
            <PurchaseUserDataInput placeholder={"Your email"} type={"email"} required />
            <PurchaseUserDataLabel>Phone number</PurchaseUserDataLabel>
            <PurchaseUserDataInput placeholder={"Your phone number"} type={"number"} />
            <PurchaseUserDataLabel>Address</PurchaseUserDataLabel>
            <PurchaseUserDataInput placeholder={"Your address"} required type={"text"} />
            <SharedCTAButton>Order and Pay</SharedCTAButton>
        </PurchaseUserDataContainer>
    )
}

export default PurchaseDataInput