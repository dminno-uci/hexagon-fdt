import React from "react";
import pic from '../images/noun_leaf_1354063.png'

export const ItemCard = props => {
    return (
        <div className="d-flex justify-content-start align-items-end" style={{ backgroundImage:`url(${pic})` }} id="item_card">{props.item.name}</div>
    )
}