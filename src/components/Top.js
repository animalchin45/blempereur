import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Top = () => {
    const [showArrow, setShowArrow] = useState(false);
    const changeShowArrow = () =>{
        if(window.scrollY >= 80){
            setShowArrow(true)
        }
        else{
            setShowArrow(false)
        }
    }
    window.addEventListener('scroll', changeShowArrow)

    return (
        <a href="#top" className={showArrow ? 'top' : 'top--hide'}>
            <FontAwesomeIcon icon={faChevronUp} />
        </a>
    )
}

export default Top