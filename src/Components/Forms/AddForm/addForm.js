import React, {useState} from "react";
import {ButtonComp} from "../../Button/button";
import SaddForm from "./addFormStyle.module.css"



export const AddForm = props => {
    const [isRequired, setIsRequied] = useState(false)
    let idRef = React.createRef()
    let fNameRef = React.createRef()
    let lNameRef = React.createRef()
    let emailRef = React.createRef()
    let phoneRef = React.createRef()
    const currentText = () => {
        let idText = idRef.current.value
        let fNameText = fNameRef.current.value
        let lNameText = lNameRef.current.value
        let emailText = emailRef.current.value
        let phoneText = phoneRef.current.value
        props.updateFormdata({id: idText, firstName: fNameText, lastName: lNameText, email: emailText, phone: phoneText})
    }
    const addUser = (data) => {
        if (idRef.current.value && fNameRef.current.value && lNameRef.current.value && emailRef.current.value && phoneRef.current.value) {
            props.addUser(data)
            setIsRequied(false)
        } else {
            setIsRequied(true)
        }
    }
    const inputClasses = `${SaddForm.container_inputItem__withoutBorders} ${SaddForm.container_inputItem__paddings}`
    return(
        <div className={SaddForm.container__displayFlex}>
            <div className={`${SaddForm.container_input__marginRight}`}>
                <input className={inputClasses} placeholder={'id'} onChange={currentText} value={props.form.id} ref={idRef}/>
            </div>
            <div className={`${SaddForm.container_input__marginRight}`}>
                <input className={inputClasses} placeholder={'firstName'} onChange={currentText} value={props.form.fName} ref={fNameRef}/>
            </div>
            <div className={`${SaddForm.container_input__marginRight}`}>
                <input className={inputClasses} placeholder={'lastName'} onChange={currentText} value={props.form.lName} ref={lNameRef}/>
            </div>
            <div className={`${SaddForm.container_input__marginRight}`}>
                <input className={inputClasses} placeholder={'email'} onChange={currentText} value={props.form.email} ref={emailRef}/>
            </div>
            <div className={`${SaddForm.container_input__marginRight}`}>
                <input className={inputClasses} placeholder={'phone'} onChange={currentText} value={props.form.phone} ref={phoneRef}/>
            </div>
            <ButtonComp title={'Добавить в таблицу'} action={addUser} arg={props.form}/>
            <ButtonComp title={'Отмена'} action={props.addingMode} arg={false}/>
            {isRequired && <div><span>Все поля обязательны !</span></div>}
        </div>
    )
}
