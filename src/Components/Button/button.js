import React from "react";
import SButton from "./buttonStyles.module.css"
import SCommon from "../../commonStyles.module.css";




export const ButtonComp = props => {
    const buttClasses = `${props.disabled && SButton.container_button__disabledLowOpacity} 
    ${SButton.container_button__bigButton} 
    ${SButton.container_button__violetButton} ${SCommon.container__marginBottom}`
    return(
        <div>
            <button className={buttClasses} disabled={props.disabled} onClick={() => props.action(props.arg)}><span>{props.title}</span></button>
        </div>
    )
}
