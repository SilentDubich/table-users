import React from "react";
import SSearchForm from "./searchForm.module.css"
import SCommon from "../../../commonStyles.module.css"


export const SearchForm = props => {
    let searchRef = React.createRef()
    const updateText = () => {
        let text = searchRef.current.value
        props.updateText(text)
    }
    return(
        <div className={`${SCommon.container__marginBottom} ${SSearchForm.container__displayFlex}`}>
            <input placeholder={'Поиск'} className={`${SSearchForm.container_inputItem__withoutBorders} ${SSearchForm.container_inputItem__paddings}`} onChange={updateText} value={props.text} ref={searchRef}/>
        </div>
    )
}
