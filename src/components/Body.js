import React from "react";

//if function, can also be exported as
// export default props =>(...)
export const Body = props => (
    <div>
        <p>{props.text}</p>
        <p>{props.minusfunction(500, 2)}</p>
    </div>
)

// export default Body;

export const Body2 = () => (
    <div>hiiiiii</div>
)