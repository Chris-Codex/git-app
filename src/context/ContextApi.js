import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [showHeaderLinks, setShowHeaderLinks] = useState(false);
    const [showLinks, setShowLinks] = useState(false);


    const toggleMobileView = () => {
        setShowLinks((prev) => !prev)
    }

    const toggleMobileHeader = () => {
        setShowHeaderLinks((prev) => !prev)
    }

    const value = {
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