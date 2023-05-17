import styled from "styled-components"
import { Triangle } from "react-loader-spinner"

var ButtonStyle = styled.div`
.btn{ position: relative; width: fit-content; padding: 15px 30px; align-self: flex-start; background: var(--primary); color: var(--white); font-weight: bold; border-radius: 50px; cursor: pointer; border: 1px solid var(--primary); transition: .5s; overflow: hidden; z-index: 9; user-select: none; display: flex; align-items: center; justify-content: center;}
.btn.disabled{ background: var(--theme2); color: var(--primary); }
.btn:hover{ background: var(--theme2); color: var(--primary); }
// ${'' /* // .btn.disabled:hover{ background: var(--theme2); color: var(--primary); } */}
.btn::before{ content: ""; width: 50%; height: 100%; position: absolute; background: var(--primary); top: 0; left: 0; z-index: -99; transition: .5s; }
.btn.disabled::before{ display: none; }
.btn::after{ content: ""; width: 50%; height: 100%; position: absolute; background: var(--primary); top: 0; right: 0; z-index: -99; transition: .5s; }
.btn.disabled::after{ display: none; }
.btn:hover:before{ width: 0; }
.btn:hover:after{ width: 0; }
.btn::selection{ background: transparent; user-select: none;}
`

function Button({text, loading, loadingText}){
    return(
        <ButtonStyle>
            <div className={`btn ${loading ? 'disabled' : ''}`}>
                { loading && 
                    <Triangle
                    height={"24"}
                    width={"24"}
                    color="var(--primary)"
                    ariaLabel="triangle-loading"
                    visible={true}
                    />
                }&nbsp;
                {!loading ? text : loadingText}
            </div>
        </ButtonStyle>
    )
}
export default Button