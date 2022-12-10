import React from 'react';

export default function button(prop) {
    return(
        <div>
            <br />
            <button style={{cursor: "pointer" , fontSize: "20px" , fontWeight: "bold"}} onClick={prop.onClick}>{prop.title}</button>
        </div>
        )
}
