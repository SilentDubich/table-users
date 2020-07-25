import React, {useState} from "react";
import SHeader from "./headerStyles.module.css"
import SCommon from "../../commonStyles.module.css"


export const Header = props => {
    const itemsClasses = `${SCommon.container_items__width} ${SCommon.container_items__borders} ${SCommon.container_items__paddings}`
    return(
        <div className={SCommon.container__flex}>
            <div onClick={() => props.filter('id')} className={itemsClasses}><span>id</span><span>&#9650; &#9660;</span></div>
            <div onClick={() => props.filter('firstName')} className={itemsClasses}><span>firstName</span><span>&#9650;</span></div>
            <div onClick={() => props.filter('lastName')} className={itemsClasses}><span>lastName</span><span>&#9650;</span></div>
            <div onClick={() => props.filter('email')} className={itemsClasses}><span>email</span><span>&#9650;</span></div>
            <div onClick={() => props.filter('phone')} className={itemsClasses}><span>phone</span><span>&#9650;</span></div>
        </div>
    )
}
