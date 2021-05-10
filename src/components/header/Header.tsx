import React from "react";
import bg from "../../assets/img/header-background.svg";

export type Props = {
    title: String
}

const Header : React.FunctionComponent<Props> = (props:Props) => {
    return(
        <header className="h-160 sm:h-136 relative">
                <img className="w-full h-auto absolute inset-0 -z-1" src={bg} alt=""/>
                <h1 className="text-white text-xxl font-sans pt-5 ml-16">{props.title}</h1>
        </header>
    )
}

export default Header;
