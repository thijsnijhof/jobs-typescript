import React from "react";

export type Props = {
    title: String
}

const Header : React.FunctionComponent<Props> = (props:Props) => {
    return(
        <div>
            <header>{props.title}</header>
        </div>
    )
}

export default Header;
