import React, {useState} from 'react'

const Top = () => {
    const [showArrow, setShowArrow] = useState(false);
    const changeShowArrow = () =>{
        if(window.scrollY >= 80){
            setShowArrow(true);
        }
        else{
            setShowArrow(false);
        }
    }
    window.addEventListener('scroll', changeShowArrow)

    return (
        <div className="top" style={showArrow ? {display: 'flex'} : {display: 'none'}}>
            <a href="#top">
                <i className="fa-solid fa-chevron-up"></i>
            </a>
        </div>
    )
}

export default Top