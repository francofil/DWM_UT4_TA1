import React from "react";
import clase from "./index.module.css";

function Card({title, description, assignedTo, startDate, endDate}) {
    return (
        <div className={clase.card}>
            <h1>{title}</h1>
            <p>Description: {description}</p>
            <p>Asigned To: {assignedTo}</p>
            <p>Start Date: {startDate}</p>
            <p>End Date: {endDate}</p>
        </div>
    )
}

export default Card;