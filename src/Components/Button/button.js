import React from "react";




export const ButtonComp = props => {
    return(
        <div>
            <button disabled={props.disabled} onClick={() => props.action(props.arg)}><span>{props.title}</span></button>
        </div>
    )
}
