import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import services from "../helpers/serviceHelper";

const defaultValue = { selectedservice: {} }

export const ServiceContext = React.createContext(defaultValue)

export const useServiceContext = () => React.useContext(ServiceContext)

export const ServiceContextProvider = (props) => {
    const location = useLocation()
    const { serviceId } = location.state
    const [selectedservice, setselectedservice] = useState({})

    useEffect(() => {
        let selectedservice = services.find(item => item.id === serviceId)
        setselectedservice(selectedservice)
    }, [serviceId])

    return (
        <ServiceContext.Provider value={{ service: selectedservice }}>
            {props.children}
        </ServiceContext.Provider>
    )
}

