import React from "react";

export default function Journal(props) {

    return (
        <div className="journal">
            <img src={process.env.PUBLIC_URL + `/images/${props.image}`} className="journal--img" />
            <div className="journal--text">
                <div className="journal--text--maps">
                    <img src={process.env.PUBLIC_URL + "/images/path.png"} className="journal--text--maps--path" />
                    <span className="journal--text--maps--country">{props.country}</span>
                    <a className="journal--text--maps--link" href={props.link} target="blank">View on Google Maps</a>
                </div>
                <h1 className="journal--text--location">{props.location}</h1>
                <h3 className="journal--text--date">{props.date}</h3>
                <p className="journal--text--description">{props.description}</p>
            </div>
        </div>
    )
}