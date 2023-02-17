import React from "react"
import styled from "styled-components"

const BackdropStyle = styled.div`
width: 100%;
height: 100vh;
background: rgb(0,0,0,.225);
position: fixed;
z-index: 98;

`

function Backdrop({showMenuBar}){
    return(
        <BackdropStyle className={`backdrop ${showMenuBar ? "open" : ""}`}/>
    )
}

export default Backdrop