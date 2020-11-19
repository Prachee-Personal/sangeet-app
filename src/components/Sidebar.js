import React, {useState } from 'react';
import spotify2 from '../Img/spotify2.png';
import './Style.css';
import { Icon, InlineIcon } from '@iconify/react';
import plusCircle from '@iconify/icons-fa/plus-circle';
import Modal from './Modal';


const Sidebar = () =>  {
    const [state,setState] = useState({
        currentPlaylist:'home',
        modal:false,
        playlists: {
            home: null,
            favorites: null,
        }
    })

    const playlists = Object.keys(state.playlists)


 
        return (
            <div 
                 style ={{ height: "100%",
                width: "160px",
                position: "fixed",
                zIndex: "1",
                top: "0",
                left: "0",
                overflowX: "hidden",
                paddingTop: "20px",
                backgroundColor:"black",
                           
                }}>
                <img  style = {{ height:"120px",paddingLeft:"20px"}} src= {spotify2} alt=''/>

                <li className ="library">Library</li>
                {
                    playlists.map(list => (
                    <li style = {{paddingLeft:"20px",
                                  textTransform:"capitalize",
                                 marginBottom:"10px",
                                  fontWeight:"Bold",
                                  cursor:"pointer",
                                listStyleType:"none",
                                }} 
                    key= {list} 
                    className={list === state.currentPlaylist ? 'active' :""}
                    onClick ={() =>{
                        setState({...state,currentPlaylist:list})
                    }}
                    >{list}
                    </li>
                    ))} 

                    <li className = "new-playlist"  
                    onClick ={() =>{
                        setState({...state,modal:true})
                    }}>
                    <Icon className = "icon" icon={plusCircle} />
                    <span>New Playlist</span>
                    </li>

                    {/* <Modal/> */}
               
            </div>
        )
    
            }

export default Sidebar
