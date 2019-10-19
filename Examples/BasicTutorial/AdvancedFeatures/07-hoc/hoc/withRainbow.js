import React from "react";

const withRainbow = WrappedComponent => {
    const RainbowCreator = props => {
        const myFavoriteColors = ["red", "orange", "yellow", "green", "blue", "purple"];
        const pickOneColor = () => myFavoriteColors[Math.floor(Math.random() * myFavoriteColors.length)];

        return <WrappedComponent {...props} color={pickOneColor()} />
    }

    return RainbowCreator;
}

export default withRainbow; 
