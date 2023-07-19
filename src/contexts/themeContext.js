import { createContext } from 'react';
import { useContext } from 'react';

const ThemeContext = createContext();


export const useThemeContext = () => {

    return useContext(ThemeContext)
}

export default ThemeContext

