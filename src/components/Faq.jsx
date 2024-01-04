import React, {useState} from 'react'
import '../styles/faq.css'

export default function Faq(props) {
    const [isShown, setIsShown] = useState(false)
    function toggle() {
        setIsShown(prevValue => !prevValue)
    }
    const activeStyles = {
        backgroundColor: "#d5d5d5"
    }
    return(
        <>
            <h3 className='question' onClick={toggle} style={isShown ? activeStyles : null}>{props.question}</h3>
            {isShown && <p className='answer'>{props.answer}</p>}
        </>
    )
}