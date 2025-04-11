import React from "react";

interface GlobalContextProps {
    name: string;
    setName: (name: string) => void;
    log: () => void,
}

const GlobalContext = React.createContext<GlobalContextProps>({
    name: "",
    setName: (name: string) => {
        console.log("name: ", name);
    },
    log: () => {},
});
export default GlobalContext;