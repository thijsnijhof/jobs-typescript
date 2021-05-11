import React from 'react';

export type Props = {
    time: Number | String,
    jobType: Number,
    title: String,
    description: String,
    location: String,
    url: String
}

const Card : React.FunctionComponent<Props> = ({ time, jobType, title, description, location, url }) =>{
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='profile' src={`${url}`} />
            <div>
                <p>{ time }</p>
                <p>{ jobType }</p>
            </div>
            <div>
                <h2>{ title }</h2>
                <p> { description }</p>
            </div>
            <p>{ location }</p>
        </div>
    )
}

export default Card;
