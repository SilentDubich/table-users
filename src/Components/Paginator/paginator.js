import React, {useState} from "react";
import SButton from "../Button/buttonStyles.module.css"
import SPaginator from "./paginatorStyles.module.css"



export const Paginator = props => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    // debugger
    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPageNumber = (portionNumber - 1) * props.portionSize
    let rightPageNumber = portionNumber * props.portionSize;
    const buttClasses = `${SButton.container_button__violetButton}`
    let totalButtons = pages
        .filter(number => number > leftPageNumber && number <= rightPageNumber)
        .map(number => <button
            className={`${buttClasses} ${SButton.container_button__smallButton}`}
            onClick={() => props.setPageAction(number)}
            >{number}</button>);

    return(
        <div className={SPaginator.container__displayFlex}>
            <div><button className={`${buttClasses} ${SButton.container_button__bigButton}`} disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>Пред.</button></div>
            <div>{totalButtons}</div>
            <div>{portionNumber < portionCount && <button className={`${buttClasses} ${SButton.container_button__bigButton}`} onClick={() => setPortionNumber(portionNumber + 1)}>След.</button>}</div>
        </div>
    )
}
