import './password.scss';
import React, { useState, useRef } from 'react';

function PasswordInput(props) {
    const [passwordShown, setPasswordShown] = useState(false);
    const inputRef = useRef(null);

    function showHidePassword() {
        setPasswordShown(!passwordShown);
        const charLength = inputRef.current.value.length;
        inputRef.current.focus();
        inputRef.current.setSelectionRange(charLength, charLength);
    }
    return (
        <>
            <label>Password</label>
            <div className={`gg-c-password ${props.className}`}>
                <input ref={inputRef} onChange={props.handleChange} value={props.value} className="gg-c-password__input gg-c-form__input" type={passwordShown ? "text" : "password"}>
                </input>
                <button className="gg-c-password__button" type="button" onClick={showHidePassword}><svg className="gg-c-password__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.658 489.658"><path d="M194.829 244.829c0 27.57 22.43 50 50 50s50-22.43 50-50-22.43-50-50-50-50 22.43-50 50z" /><path d="M485.313 237.318c-23.974-41.44-58.446-76.197-99.691-100.511-42.473-25.038-91.117-38.28-140.681-38.3l-.112-.001-.112.001c-49.564.02-98.208 13.262-140.681 38.3-41.245 24.314-75.718 59.07-99.691 100.511L0 244.829l4.345 7.511c23.974 41.44 58.446 76.197 99.691 100.511 42.473 25.038 91.117 38.28 140.681 38.3l.112.001.112-.001c49.564-.02 98.208-13.262 140.681-38.3 41.245-24.314 75.718-59.07 99.691-100.511l4.345-7.511-4.345-7.511zm-124.161 7.511c0 64.105-52.125 116.264-116.217 116.322l-.107.001-.107-.001c-64.092-.058-116.217-52.217-116.217-116.322s52.125-116.264 116.217-116.322l.107-.001.107.001c64.092.058 116.217 52.217 116.217 116.322zm-326.313 0c22.94-36.587 54.809-66.03 91.791-86.144-17.673 24.184-28.124 53.964-28.124 86.144s10.45 61.96 28.124 86.144c-36.982-20.114-68.851-49.557-91.791-86.144zm328.19 86.144c17.673-24.184 28.124-53.964 28.124-86.144s-10.45-61.96-28.124-86.144c36.981 20.114 68.85 49.557 91.791 86.144-22.941 36.587-54.81 66.03-91.791 86.144z" /></svg></button>
            </div>
        </>
    )
}

export default PasswordInput;