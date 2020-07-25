import React, {useState} from "react";
import {ButtonComp} from "../Button/button";



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
        } else {
            setIsRequied(true)
        }
    }
    return(
        <div>
            <div>
                <span>id</span>
                <input onChange={currentText} value={props.form.id} ref={idRef}/>
            </div>
            <div>
                <span>firstName</span>
                <input onChange={currentText} value={props.form.fName} ref={fNameRef}/>
            </div>
            <div>
                <span>lastName</span>
                <input onChange={currentText} value={props.form.lName} ref={lNameRef}/>
            </div>
            <div>
                <span>email</span>
                <input onChange={currentText} value={props.form.email} ref={emailRef}/>
            </div>
            <div>
                <span>phone</span>
                <input type='tel' onChange={currentText} value={props.form.phone} ref={phoneRef}/>
            </div>
            <ButtonComp title={'Добавить в таблицу'} action={addUser} arg={props.form}/>
            <button onClick={() => props.addingMode(false)}>Отмена</button>
            {isRequired && <div><span>Все поля обязательны !</span></div>}
        </div>
    )
}
