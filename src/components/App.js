import React, { Component } from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Content from './Content';
import Playbar from './Playbar'

export class App extends Component {
    render() {
        return (
            <div 
            style={{height:"100%",
                    width:"100%",
                    display:"flex",
                    position:"relative",
                    color:"white",
            }}>
                <Topbar/>
                <Sidebar/> 
                <Content/>
                <Playbar/>
            </div>
        )
    }
}

export default App
