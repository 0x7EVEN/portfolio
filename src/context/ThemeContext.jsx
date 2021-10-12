import {createContext, useState} from "react";


export const Theme = createContext(false)


export default function ThemeProvider ({children}) {
     const [theme, setTheme] = useState(true);

     return (
          <Theme.Provider value={{theme, setTheme}}  >
               {children}
          </Theme.Provider>
     )
}