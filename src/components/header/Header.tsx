import React from "react";
import bg from "../../assets/img/header-background.svg";
import SearchForm from "../searchform/Searchform";

export type Props = {
    title: String
}

const Header : React.FunctionComponent<Props> = (props:Props) => {
    return(
        <header className="lg:min-h-160 md:min-h-160 sm:min-h-136 bg-no-repeat relative" style={{ backgroundImage: `url(${bg}), linear-gradient(to right, transparent 0%, #5964E0 50%)`, objectFit: 'fill' }}>
                <h1 className="text-white text-xxl font-sans pt-5 ml-16">{props.title}</h1>
            <SearchForm classes="absolute inset-x-1/4 -bottom-4"/>
        </header>
    )
}

export default Header;
