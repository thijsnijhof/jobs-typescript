import React from "react";

export type Props = {
    classes: String
}

const SearchForm : React.FunctionComponent<Props> = (props: Props) => {
    return(
        <form className={`w-10/12 flex ${props.classes}`}>
            <input type="text" placeholder="Filter by title, companies, expertise..."/>
            <input type="text" placeholder="Filter by location"/>
            <div className="flex">
                <input type="checkbox"/>
                <input type="submit"/>
            </div>
        </form>
    )
}

export default SearchForm;
