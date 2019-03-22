
import React from 'react';


const Information = props => {
    return (
        <div className="Char">
            <h1 className="Name">{props.characterData.name}</h1>
            <p className="Info">Birth Year: {props.characterData.birth_year}</p>
            <p className="Info">Eye Color:{props.characterData.eye_color}</p>
            <p className="Info">Gender:{props.characterData.gender}</p>
            <p className="Info">Mass:{props.characterData.mass}</p>
            <p className="Info">Hair-Color:{props.characterData.hair_color}</p>
            <p className="Info">Skin-Color:{props.characterData.skin_color}</p>
            <p className="Info">Films:{props.characterData.films}</p>
        </div>
    );
};

export default Information;