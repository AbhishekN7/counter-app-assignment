import React, { Component } from 'react';

class ClassButton extends Component {
    render() {
        const { functionType, type } = this.props;

        return (
            <div>
                <button className="buttonStyling" onClick={functionType}>{type}</button>
            </div>
        );
    }
}

export default ClassButton;
