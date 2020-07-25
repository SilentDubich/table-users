import React from "react";
import SUser from "./userStyles.module.css";

// Выбран пользователь <b>Sue Corson</b>
// Описание:
//     <textarea>
// et lacus magna dolor...
// </textarea>
// Адрес проживания: <b>9792 Mattis Ct</b>
// Город: <b>Waukesha</b>
// Провинция/штат: <b>WI</b>
// Индекс: <b>22178</b>


export const MoreInfo = props => {
    return(
        <div onClick={() => props.more(false)} className={SUser.moreInfo_container__margin}>
            <div>
                <span>Выбран пользователь: <b>{props.props.fName}</b></span>
            </div>
            <div>
                <div>
                    <span>Описание</span>
                </div>
                <div>
                    <textarea className={SUser.moreInfo_textarea__width} name="" id="" cols="50" rows="5" readOnly={true}>{props.props.description}</textarea>
                </div>
            </div>
            <div>
                <span>Адрес проживания: <b>{props.props.address.streetAddress}</b></span>
            </div>
            <div>
                <span>Город: <b>{props.props.address.city}</b></span>
            </div>
            <div>
                <span>Провинция/штат: <b>{props.props.address.state}</b></span>
            </div>
            <div>
                <span>Индекс: <b>{props.props.address.zip}</b></span>
            </div>
        </div>
    )
}
