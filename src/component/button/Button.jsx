import react from 'react';
import './Button.css'

const Button =(props) =>{

    const clickButton = () => {
        alert("Clicked")
    }

    return(

        <button className='button' onClick={clickButton}>This is button{props.namalengkap}</button>
    );
    
};
export default Button;