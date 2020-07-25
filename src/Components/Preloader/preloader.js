import React from "react";
import Spinner from "./Spinner-1.4s-3a356a.svg"
import SPreloader from "./preloaderStyles.module.css"

export const Preloader = props => {
    return(
        <div>
            <img className={`${SPreloader.Preloader__position}`} src={Spinner} alt="Preloader"/>
        </div>
    )
}
