import React from "react"
import { HeaderUI } from '../Components/HeaderUI/HeaderUI'
import { GetApiRAM } from '../Components/GetApi/GetApi'
// import { FooterUI } from '../Components/FooterUI/FooterUI'

export const Page = () => {
    return (
        <div>
            <header>
                <HeaderUI/>
            </header>
            <main>
                <GetApiRAM/>
            </main>
            {/* <footer>
                <FooterUI/>
            </footer> */}
        </div>
    )
}