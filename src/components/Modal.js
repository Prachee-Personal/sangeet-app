import React from 'react';

const Model = ({ children,show ,close}) => {
    return(
        <div className="Modal">
            <div className ="modal-content">
                <i className="fa fa-times" onclick={close}/>
            {children}
            </div>
        </div>
    )
}

export default Model