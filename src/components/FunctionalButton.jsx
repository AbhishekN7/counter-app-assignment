import React from 'react';

function FunctionalButton({ functionType, type }) {
    return (
        <div>
            <button className="buttonStyling" onClick={functionType}>{type}</button>
        </div>
    );
}

export default FunctionalButton;
