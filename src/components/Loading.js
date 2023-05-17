import { Triangle } from "react-loader-spinner"
import Logo from "./Logo"


function Loading({show, size}){
    return(
        <div className={`loader ${show ? '' : 'hide'}`}>
            {/* <Triangle
            height="150"
            width="150"
            color="var(--primary)"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            /> */}
            <Logo animate={true}/>
        </div>
    )
}
export default Loading