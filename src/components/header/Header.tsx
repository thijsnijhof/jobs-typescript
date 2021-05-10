import React from "react";
import bg from "../../assets/img/header-background.svg";

export type Props = {
    title: String
}

const Header : React.FunctionComponent<Props> = (props:Props) => {
    return(
        <div className="h-160 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
            <header>{props.title}</header>
        </div>
    )
}

export default Header;
