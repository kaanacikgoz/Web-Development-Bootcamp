import React, { useState } from "react";

function Item(props) {
    return (
        <div>
            <li 
            onClick={()=> {
                props.onChecked(props.id);
            }}>
                {props.item}
            </li>
        </div>
    )
    
}

export default Item;