import React, {useState} from "react";
import {ButtonComp} from "../../Button/button";
import SAddForm from "./addFormStyle.module.css"
import {validator} from "../../Validators/validators";
import SCommon from "../../../commonStyles.module.css"


export const AddForm = props => {
    const [isRequired, setIsRequied] = useState(false)
    const [isErrors, setIsErrors] = useState(false)
    let idRef = React.createRef()
    let fNameRef = React.createRef()
    let lNameRef = React.createRef()
    let emailRef = React.createRef()
    let phoneRef = React.createRef()
    // Обновляет данные с формы в редюсере
    const currentText = () => {
        let idText = idRef.current.value
        let fNameText = fNameRef.current.value
        let lNameText = lNameRef.current.value
        let emailText = emailRef.current.value
        let phoneText = phoneRef.current.value
        props.updateFormdata({id: idText, firstName: fNameText, lastName: lNameText, email: emailText, phone: phoneText})
    }

    const addUser = (data) => {
        let error = {}
        setIsRequied(false)
        if (idRef.current.value && fNameRef.current.value && lNameRef.current.value && emailRef.current.value && phoneRef.current.value) {
            error = validator({id: data.id, fName: data.firstName, lName: data.lastName, email: data.email, phone: data.phone})
            props.setErrors(error)
            if (Object.keys(error).length === 0) {
                props.addUser(data)
                props.updateFormdata({id: '', firstName: '', lastName: '', email: '', phone: ''})
                props.addingMode(false)
            } else {
                setIsErrors(true)
            }
        } else {
            setIsRequied(true)
        }
    }
    const inputClasses = `${SAddForm.container_inputItem__withoutBorders} ${SAddForm.container_inputItem__paddings}`
    return(
        <div className={SCommon.container__marginBottom}>
            <div className={SAddForm.container__displayFlex}>
                <div className={`${SAddForm.container_input__marginRight}`}>
                    <input className={inputClasses} placeholder={'id'} onChange={currentText} value={props.form.id} ref={idRef}/>
                </div>
                <div className={`${SAddForm.container_input__marginRight}`}>
                    <input className={inputClasses} placeholder={'firstName'} onChange={currentText} value={props.form.fName} ref={fNameRef}/>
                </div>
                <div className={`${SAddForm.container_input__marginRight}`}>
                    <input className={inputClasses} placeholder={'lastName'} onChange={currentText} value={props.form.lName} ref={lNameRef}/>
                </div>
                <div className={`${SAddForm.container_input__marginRight}`}>
                    <input className={inputClasses} placeholder={'email'} onChange={currentText} value={props.form.email} ref={emailRef}/>
                </div>
                <div className={`${SAddForm.container_input__marginRight}`}>
                    <input className={inputClasses} placeholder={'phone'} onChange={currentText} value={props.form.phone} ref={phoneRef}/>
                </div>
                <ButtonComp title={'Добавить в таблицу'} action={addUser} arg={props.form}/>
                <ButtonComp title={'Отмена'} action={props.addingMode} arg={false}/>

            </div>
            {isErrors && Object.values(props.error).map(key => {
                return (
                    <div className={SAddForm.errors_items__decor}><span>{key}</span></div>
                )
            })}
            {isRequired && <div className={SAddForm.errors_items__decor}><span>Все поля обязательны !</span></div>}
        </div>

    )
}
