import React from "react";

interface AnotherGlobalContext {
    anotherName: string;
    func: () => void;
    setAnotherName: (name: string) => void;
}

const AnotherGlobalContext = React.createContext<AnotherGlobalContext>({
    anotherName: "",
    func: () => null,
    setAnotherName: (name: string) => {
        console.log("name: ", name);
    },
})

export default AnotherGlobalContext;