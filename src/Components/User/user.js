import React, {useState} from "react";
import SUser from "./userStyles.module.css"
import SCommon from "../../commonStyles.module.css"
import {MoreInfo} from "./userMoreInfo";



export const User = props => {
    const itemsClasses = `${SCommon.container_items__width} ${SCommon.container_items__borders} ${SCommon.container_items__paddings}`
    const [more, setMoreInfo] = useState(false)
    return(
        <div className={SUser.user_container__margin}>
            <div onClick={() => setMoreInfo(!more)} className={SCommon.container__flex}>
                <div className={itemsClasses}><span>{props.id}</span></div>
                <div className={itemsClasses}><span>{props.fName}</span></div>
                <div className={itemsClasses}><span>{props.lName}</span></div>
                <div className={itemsClasses}><span>{props.email}</span></div>
                <div className={itemsClasses}><span>{props.phone}</span></div>
            </div>
            <div>
                {more && <MoreInfo props={{...props}}/>}
            </div>
        </div>

    )
}
