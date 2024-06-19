import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "../Screens/style.css";

export const Ellipse = ({ property1, propertyDefaultClassName }) => {
    const initialState = {
        property1: property1 || "default",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "default":
                return { ...state, property1: "default" };
            case "click":
                return { ...state, property1: "variant-2" };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            {state.property1 === "default" && (
                <div
                    className={`ellipse property-default ${propertyDefaultClassName}`}
                    onClick={() => dispatch({ type: "click" })}
                />
            )}
            {state.property1 === "variant-2" && (
                <img
                    className={`ellipse property ${propertyDefaultClassName}`}
                    alt="Property"
                    src="property-1-variant2.svg"
                />
            )}
        </>
    );
};

Ellipse.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    propertyDefaultClassName: PropTypes.string,
};
