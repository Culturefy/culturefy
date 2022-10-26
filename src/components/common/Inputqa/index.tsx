import React from "react";
import Styles from './styles.module.scss'

function Inputqa(
    {
        variant = 'white',
        type='text',
        color='gray',
        ...props
    }
) {
    return (
        <>
            <input type={type} placeholder={`${props.placeholder}`} className={` ${Styles.inpuField} ${Styles[variant]} ${Styles[color]}`} />
        </>
    );
}


export default Inputqa;
