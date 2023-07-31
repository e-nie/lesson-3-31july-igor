import React from 'react';

type PropsType = {
    name: string
    callback: () => void

}

const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callback()
    }


    return (
        <button onClick = {onClickHandler}> {props.name}</button>
    );
};

export default Button;
