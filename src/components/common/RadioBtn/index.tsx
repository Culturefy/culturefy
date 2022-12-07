import React from "react";
import Styles from './styles.module.scss'

function RadioBtn(
    {
        type = 'radio',
        name='gender',
        value='male',
        id='gender',
        ...props
    }
) {

    return (
        <>
            <div className={Styles.RadioBtn} onChange={props.onChange}>
                <input type={type} value={value} name={name} id={id} onChange={props.onCHange} />
                { props.label ? <label htmlFor={id}> {props.label} </label> : '' }
            </div>
        </>
    );
}



export default RadioBtn;