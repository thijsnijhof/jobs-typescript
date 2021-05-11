import React from "react";
import Header from "../header/Header";

export type Props = {
    children: React.ReactNode
}

const Layout : React.FunctionComponent<Props> = (props:Props) => {
    return(
        <div className="h-full bg-secondary">
            <Header title="devjobs" />
            <main className="">{props.children}</main>
        </div>
    )
}

export default Layout;
