import {MdHorizontalRule} from 'react-icons/md'

function Heading({title, title1}){
    return(
        <div className="headings">
            <h1 className="text">{title}<span> {title1}</span></h1>
            <div className='icons'>
                <div className="icon"></div>
                <div className="icon"></div>
            </div>
        </div>
    )
}

export default Heading