import React, { Component } from 'react';
import Modal from './Modal';



export class Content extends Component {
    render() {
        return (
            <div style ={{
                width: "100%",
                height:"100%",
                padding:"220px",
                background:"#121212",
                textAlign:"center",
                position:"absolute",
                top:"90px",
                left:"160px",
                
                           
            }}>
               <Modal>This is asli Modal</Modal>
            </div>
        )
    }
}

export default Content
