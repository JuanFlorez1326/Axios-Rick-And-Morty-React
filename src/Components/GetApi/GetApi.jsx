import React,{ useState } from "react"
import axios from "axios"
import { CardUI } from '../CardUI/CardUI'
import { InputUI } from "../InputUI/InputUI"

export const GetApiRAM = () => {

    const [card, setCard] = useState([])
    
    const GetApi = (search) => {
        const URL = `https://rickandmortyapi.com/api/character/?name=${search.target.value}`

        axios.get(URL)
        .then(response => {
            setCard(response.data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <main>
            <div>
                <InputUI search={ GetApi }/>
            </div>
            <div>
                {
                    card.map(
                        card => (
                            <CardUI key={ card.id } data={ card }/>
                        )
                    )
                }
            </div>
        </main>
    )
}