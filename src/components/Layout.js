import React from "react"

import Header from "./Header"
import End from "./End"
import "./Layout.sass"

function Layout({ children }) {
    return <div className="App">
        <Header />
        <End />
        <main>
            <div className="Content">
                {children}
            </div>
        </main>
    </div>
}

export default Layout