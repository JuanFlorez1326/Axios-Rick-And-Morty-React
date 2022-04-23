import React from "react"
import './InputUI.css'

export const InputUI = ({ search }) => {
    return (
        <div className='divInputUI'>
            <input className='inputSearch' type="text" placeholder="Search Character" onChange={ search }/>
        </div>
    )
}