import React, {useEffect, useRef} from "react"

import Header from "../Header/Header"
import "./Layout.sass"

function Layout({ children }) {
    const app = useRef(null)

    useEffect(() => {
        if (!app || typeof window === "undefined") return;

        if (navigator?.permissions)
            navigator.permissions.query({name: "accelerometer"})

        var accelX = 0;
        var accelY = 0;

        window.addEventListener("devicemotion", ev => {
            if (!app) return;

            accelX = accelX + (ev.acceleration.x*35 - accelX) * 0.3
            accelY = accelY + (ev.acceleration.y*35 - accelY) * 0.3
            app?.current?.style?.setProperty(
                "background-position-x",
                `${accelX}px`
            )
            app?.current?.style?.setProperty(
                "background-position-y",
                `${accelY}px`
            )
        })
        window.addEventListener("mousemove", ev => {
            if (!app) return;

            app?.current?.style?.setProperty(
                "background-position-x",
                `${ev.clientX*0.05}px`
            )
            app?.current?.style?.setProperty(
                "background-position-y",
                `${ev.clientY*0.05}px`
            )
        })
    }, [app])

    return <div className="App" ref={app}>
        <Header />
        <main>
            <div className="Content">
                {children}
            </div>
        </main>
    </div>
}

export default Layout