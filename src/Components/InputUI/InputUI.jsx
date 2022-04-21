import React from "react"

export const InputUI = ({ search }) => {
    return (
        <div>
            <input type="text" placeholder="Search" onChange={ search }/>
        </div>
    )
}