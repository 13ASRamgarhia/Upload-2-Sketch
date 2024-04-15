
import React, { useState } from "react";
import loginContext from "./loginContext";

const LoginState = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(true)
    const [darkMode, setDarkMode] = useState(false)

    return(
        <loginContext.Provider value={{isLoggedIn, setLoggedIn, darkMode, setDarkMode}}>
            {props.children}
        </loginContext.Provider>
    )
}

export default LoginState;