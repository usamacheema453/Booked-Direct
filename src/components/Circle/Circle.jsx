import React from "react";

const Circle = ({ color, size }) => {
    return (
        <div className={`rounded-full ${color} ${size} flex items-center justify-center shadow-lg animation-pulse`}>
            {/* Decorative circle component */}
        </div>
    );
};

export default Circle;