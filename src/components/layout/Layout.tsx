import React from "react";
import Header from "../header/Header";

export type Props = {
    children: React.ReactNode
}

const Layout : React.FunctionComponent<Props> = (props:Props) => {
    return(
        <>
            <Header title="devjobs" />
            <main>{props.children}</main>
        </>
    )
}

export default Layout;
