import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import services from "../helpers/serviceHelper";

const defaultValue = { selectedservice: {}, otherservices: [] }

export const ServiceContext = React.createContext(defaultValue)

export const useServiceContext = () => React.useContext(ServiceContext)

export const ServiceContextProvider = (props) => {
    const { service, subservice } = useParams()
    const [selectedservice, setselectedservice] = useState({})

    useEffect(() => {
        let selectedservice = services.find(item => item.name === service)
        setselectedservice(selectedservice)
    }, [service, subservice])

    return (
        <ServiceContext.Provider value={{ service: selectedservice }}>
            {props.children}
        </ServiceContext.Provider>
    )
}

