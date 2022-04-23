import React from "react"
import './CardUI.css'

export const CardUI = ({ data }) => {
    const { id, name, image, gender, species, status, location, origin } = data
    return (
        <div key={ id } className='divCard'>

            <div className='divImage'>
                <img className='classImage' src={ image } alt={name} />
            </div>

            <div className='divInfoCard'>
                <h1 className='classTitleCard'>{ name }</h1>
                <h4 className='itemInfo classInfoCard'>Status: { status }</h4>
                <h4 className='itemInfo'>Gender: { gender }</h4>
                <h4 className='itemInfo'>Species: { species }</h4>
                <h4 className='itemInfo'>Origin: { origin.name }</h4>
                <h4 className='itemInfo'>Location: { location.name }</h4>
            </div>
        </div>
    )
}