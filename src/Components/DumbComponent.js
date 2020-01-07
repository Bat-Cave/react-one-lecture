//Functional Components are typically used for simple functionality or display. A functional component needs at least: an import of React, a function that returns JSX, and an export statement. Since functional components don't extend from Reacts Component class, they do not have access to the render method.
import React from 'react';

const DumbComponent = () => {
    return(
        <div>Dumb Component</div>
    )
}

export default DumbComponent;