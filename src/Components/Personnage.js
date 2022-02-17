import React from 'react'


export default function Personnage(props) {
    return (
        <div>
            <p>Hello {props.info.age}</p>
            {console.log(props.info)}
            <button type="submit" onClick={props.button}>Change State</button>
        </div>
    )
}
