import React from 'react';

const Loader = (props) => {
    const loaderNode = document.querySelector('.loader');
    return (
        <div>
            {props.loader ? loaderNode.style.display = 'flex' : loaderNode.style.display = 'none'}           
        </div>
    )
}

export default Loader;