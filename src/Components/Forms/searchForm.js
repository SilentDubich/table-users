import React from "react";



export const SearchForm = props => {
    let searchRef = React.createRef()
    const updateText = () => {
        let text = searchRef.current.value
        props.updateText(text)
    }
    return(
        <div>
            <input onChange={updateText} value={props.text} ref={searchRef}/>
            {/*<button onClick={() => props.search()}>Найти</button>*/}
        </div>
    )
}
