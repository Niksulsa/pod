import React from "react";
import './picture.scss';

const Picture = props => {
    return(
      <div className="card">
        <div className="card__main">
            <h3 className="card__heading">{props.photo.title}</h3>
            <img className="card__image" src={props.photo.url} alt={props.photo.title} />
        </div>
        <p className="card__description">{props.photo.explanation}</p>
    </div>
    )
}
  
export default Picture;