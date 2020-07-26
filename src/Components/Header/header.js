import React, {useState} from "react";
import SHeader from "./headerStyles.module.css"
import SCommon from "../../commonStyles.module.css"


export const Header = props => {
    const [idMethod, setIdMethod] = useState(false)
    const [fNameMethod, setFNameMethod] = useState(false)
    const [lNameMethod, setLNameMethod] = useState(false)
    const [emailMethod, setEmailMethod] = useState(false)
    const [phoneMethod, setPhoneMethod] = useState(false)
    const itemsClasses = `${SCommon.container_items__width} ${SCommon.container_items__borders} ${SCommon.container_items__paddings}`
    return(
        <div className={SCommon.container__flex}>
            <div onClick={() => {
                props.filter('id', idMethod)
                setIdMethod(!idMethod)
            }} className={itemsClasses}><span>id</span>{idMethod ? <span>&#9660;</span> : <span>&#9650;</span>}</div>
            <div onClick={() => {
                props.filter('firstName', fNameMethod)
                setFNameMethod(!fNameMethod)
            }} className={itemsClasses}><span>firstName</span>{fNameMethod ? <span>&#9660;</span> : <span>&#9650;</span>}</div>
            <div onClick={() => {
                props.filter('lastName', lNameMethod)
                setLNameMethod(!lNameMethod)
            }} className={itemsClasses}><span>lastName</span>{lNameMethod ? <span>&#9660;</span> : <span>&#9650;</span>}</div>
            <div onClick={() => {
                props.filter('email', emailMethod)
                setEmailMethod(!emailMethod)
            }} className={itemsClasses}><span>email</span>{emailMethod ? <span>&#9660;</span> : <span>&#9650;</span>}</div>
            <div onClick={() => {
                props.filter('phone', phoneMethod)
                setPhoneMethod(!phoneMethod)
            }} className={itemsClasses}><span>phone</span>{phoneMethod ? <span>&#9660;</span> : <span>&#9650;</span>}</div>
        </div>
    )
}
