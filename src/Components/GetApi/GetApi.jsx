import './GetApi.css'
import axios from "axios"
import React,{ useState } from "react"
import { CardUI } from '../CardUI/CardUI'
import { InputUI } from "../InputUI/InputUI"

export const GetApiRAM = () => {

    const [card, setCard] = useState([])
    
    const GetApi = (search) => {
        const URL = `https://rickandmortyapi.com/api/character/?name=${search.target.value}`

        axios.get(URL)
        .then(response => {
            setCard(response.data.results)
            console.log(response.data.results);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <main>
            <header>
                <div>
                    <InputUI search={ GetApi }/>
                </div>
            </header>
            <div>
                <section>
                    {
                        card.map(
                            card => (
                                <CardUI key={ card.id } data={ card }/>
                            )
                        )
                    }
                </section>
            </div>
        </main>
    )
}