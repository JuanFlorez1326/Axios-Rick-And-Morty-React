import React from "react"

export const CardUI = ({ data }) => {
    const { name, image, id } = data
    return (
        <div>
            <div key={ id }>
                <h1>{ name }</h1>
                <img src={ image } alt={name} />
            </div>
        </div>
    )
}