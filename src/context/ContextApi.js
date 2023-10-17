import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [showHeaderLinks, setShowHeaderLinks] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const [prList, setPrList] = useState()

    const getResponse = async () => {
        try {
            await axios.get(`https://api.github.com/repos/facebook/react/pulls`)
                .then((response) => {
                    setPrList(response.data)
                })
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error.message)
        }
    }

    

    useEffect(() => {
        getResponse();
    }, [getResponse])


    const toggleMobileView = () => {
        setShowLinks((prev) => !prev)
    }

    const toggleMobileHeader = () => {
        setShowHeaderLinks((prev) => !prev)
    }

    const value = {
        prList,
        getResponse,
        showLinks,
        setShowLinks,
        toggleMobileView,
        showHeaderLinks,
        setShowHeaderLinks,
        toggleMobileHeader
    }


    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}