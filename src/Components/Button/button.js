import React from "react";
import SButton from "./buttonStyles.module.css"




export const ButtonComp = props => {
    const buttClasses = `${props.disabled && SButton.container_button__disabledLowOpacity} ${SButton.container_button__bigButton} ${SButton.container_button__violetButton}`
    return(
        <div>
            <button className={buttClasses} disabled={props.disabled} onClick={() => props.action(props.arg)}><span>{props.title}</span></button>
        </div>
    )
}
