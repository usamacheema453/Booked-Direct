import React from "react";

const Circle =({ color, size  })=>{
    return(
        <>
        <div className={`rounded-full ${color} ${size}  flex items-center justify-center   `}>
      {/* You can add content inside the circle if needed */}
    </div>
        
        </>
    )
}

export default Circle;