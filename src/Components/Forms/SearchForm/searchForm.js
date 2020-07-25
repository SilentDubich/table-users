import React from "react";
import SSearchForm from "./searchForm.module.css"
import {ButtonComp} from "../../Button/button";


export const SearchForm = props => {
    let searchRef = React.createRef()
    const updateText = () => {
        let text = searchRef.current.value
        props.updateText(text)
    }
    return(
        <div className={SSearchForm.container__displayFlex}>
            <input className={`${SSearchForm.container_inputItem__withoutBorders} ${SSearchForm.container_inputItem__paddings}`} onChange={updateText} value={props.text} ref={searchRef}/>
            {/*<button onClick={() => props.search()}>Найти</button>*/}
            <ButtonComp title={'Найти'} action={props.search}/>
        </div>
    )
}
