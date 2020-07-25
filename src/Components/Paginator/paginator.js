import React, {useState} from "react";




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

    let totalButtons = pages
        .filter(number => number > leftPageNumber && number <= rightPageNumber)
        .map(number => <button
            onClick={() => props.setPageAction(number)}
            >{number}</button>);

    return(
        <div>
            <div><button disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button></div>
            <div>{totalButtons}</div>
            <div>{portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}</div>
        </div>
    )
}
