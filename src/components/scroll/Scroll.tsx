import React from 'react';

export type Props = {
    children: React.ReactNode
}
const Scroll : React.FunctionComponent<Props> = (props:Props) => {
    return (
        <div className="overflow-y-scroll h-full pt-20 w-3/4">
            { props.children }
        </div>
    )
}

export default Scroll;
