
import React from 'react';


const Information = props => {
    return (
        <div className="Char">
            <h1 className="Name">{props.characterData.name}</h1>
            <p className="Info"><strong>Birth Year:</strong> {props.characterData.birth_year}</p>
            <p className="Info">Eye Color:{props.characterData.eye_color}</p>
            <p className="Info">Gender:{props.characterData.gender}</p>
            <p className="Info">Mass:{props.characterData.mass}</p>
            <p className="Info">Hair-Color:{props.characterData.hair_color}</p>
            <p className="Info">Skin-Color:{props.characterData.skin_color}</p>
        </div>
    );
};

export default Information;