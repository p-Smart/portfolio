import styled from "styled-components"

var ButtonStyle = styled.div`
.btn{ position: relative; width: fit-content; padding: 15px 30px; align-self: flex-start; color: var(--white); font-weight: bold; border-radius: 50px; cursor: pointer; border: 1px solid var(--primary); transition: .5s; overflow: hidden; z-index: 10; background-color: var(--primary); user-select: none;}
.btn:hover{ background: var(--theme2); color: var(--primary); }
.btn::before{ content: ""; width: 50%; height: 100%; position: absolute; background-color: var(--primary); top: 0; left: 0; z-index: -99; transition: .5s; }
.btn::after{ content: ""; width: 50%; height: 100%; position: absolute; background-color: var(--primary); top: 0; right: 0; z-index: -99; transition: .5s; }
.btn:hover:before{ width: 0; }
.btn:hover:after{ width: 0; }
.btn::selection{ background-color: transparent; user-select: none;}
`

function Button({text}){
    return(
        <ButtonStyle>
            <div className="btn">{text}</div>
        </ButtonStyle>
    )
}
export default Button