import React from 'react';

export default function Box({ on, toggle}){

    const styles = on ? {backgroundColor: "black"} : {backgroundColor: "transparent"}
    return (
        <div className='box' style={styles} onClick={toggle}></div>
    )
}