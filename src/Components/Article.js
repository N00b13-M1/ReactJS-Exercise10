import React from 'react'

export default function Article(props) {
    return (
        <div>
            <p>It's an {props.name} model {props.model}</p>
        </div>
    )
}
