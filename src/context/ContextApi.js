import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [showHeaderLinks, setShowHeaderLinks] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const [prList, setPrList] = useState()

    const res = async () => {
        axios.get(`https://api.github.com/repos/facebook/react/pulls?per_page=${10}`)
            .then((response) => {
                setPrList(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        res();
    }, [])


    const toggleMobileView = () => {
        setShowLinks((prev) => !prev)
    }

    const toggleMobileHeader = () => {
        setShowHeaderLinks((prev) => !prev)
    }

    const value = {
        prList,
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