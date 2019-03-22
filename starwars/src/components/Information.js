
import React from 'react';


const Information = props => {
    return (
        <div className="Char">
            <h1 className="Name">{props.characterData.name}</h1>
            <p className="Info"><strong>Birth Year: </strong> {props.characterData.birth_year}</p>
            <p className="Info"><strong>Eye Color: </strong>{props.characterData.eye_color}</p>
            <p className="Info"><strong>Gender: </strong>{props.characterData.gender}</p>
            <p className="Info"><strong>Mass: </strong>{props.characterData.mass}</p>
            <p className="Info"><strong>Hair-Color: </strong>{props.characterData.hair_color}</p>
            <p className="Info"><strong>Skin-Color: </strong>{props.characterData.skin_color}</p>
        </div>
    );
};

export default Information;