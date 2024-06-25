import { createContext } from 'react';
import projects from '../Assets/Projects/projects';
import skills from '../Assets/Skills/skills';

export const Context = createContext(null);

const ContextProvider = (props) => {
    const contextValue = {projects, skills};
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider