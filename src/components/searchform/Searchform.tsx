import React from "react";
import iconSearch from "../../assets/img/icon-search.svg";
import iconLocation from "../../assets/img/icon-location.svg";

export type Props = {
    classes: String
}

const SearchForm : React.FunctionComponent<Props> = (props: Props) => {
    return(
        <div className={`${props.classes} flex w-full justify-center`}>
            <form className="flex w-3/4 bg-white rounded divide-x">
                <div className="flex flex-grow rounded-l items-center">
                    <label className="bg-no-repeat bg-cover ml-3 mr-1"
                           htmlFor="search"
                           style={{
                               backgroundImage: `url(${iconSearch})`,
                               height: '25px',
                               width: '25px'
                           }}
                    />
                    <input className="flex h-full w-full p-3" type="text" placeholder="Filter by title, companies, expertise..." id="search"/>
                </div>
                <div className="flex flex-grow rounded-l items-center">
                    <label className="bg-no-repeat bg-cover ml-3 mr-1"
                           htmlFor="location"
                           style={{
                               backgroundImage: `url(${iconLocation})`,
                               height: '25px',
                               width: '25px'
                           }}
                    />
                    <input className="flex h-full w-full p-3" type="text" placeholder="Filter by location" id="location"/>
                </div>
                <div className="flex flex-grow items-center justify-between p-3 pl-5 pr-5">
                    <div className="flex items-center mr-2">
                        <input className="flex flex-grow mr-2" type="checkbox" id="checkbox"/>
                        <label htmlFor="checkbox">Full Time Only</label>
                    </div>
                    <input className="p-2 pl-5 pr-5 bg-accent text-white rounded w-max" type="submit" value="Search"/>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;
