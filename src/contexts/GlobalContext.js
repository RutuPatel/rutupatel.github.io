import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const defaultValue = { showPreloader: true }

export const GlobalContext = React.createContext(defaultValue)

export const useGlobalContext = () => React.useContext(GlobalContext)

export const GlobalContextProvider = (props) => {

    const location = useLocation()
    const [showPreloader, setShowPreloader] = useState(true)

    useEffect(() => {
        toggleShowPreloader()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [location.pathname])

    const toggleShowPreloader = () => {
        setShowPreloader(true)
        const timer = setTimeout(() => {
            setShowPreloader(false)
        }, 500)
        return () => clearTimeout(timer)
    }

    return (
        <GlobalContext.Provider value={{ showPreloader: showPreloader }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

