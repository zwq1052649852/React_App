import { useState, useContext } from "react";
import GlobalContext from "./global-context.ts";
import AnotherGlobalContext from "./another-global-context.ts";

export default function TestUseContext() {
    const [name, setName] = useState("james_wicky");
    const context = {
        name,
        setName,
        log: () => {
            console.log("name: ", { name })
        },
    }

    const [anotherName, setAnotherName] = useState('i m anotherName');
    const anotherContext = {
        anotherName,
        setAnotherName,
        func: () => {
            console.log("anotherName: ", { anotherName })
        },
    }

    return (<div>
        <AnotherGlobalContext.Provider value={anotherContext}>
            <GlobalContext.Provider value={context}>
                <Child></Child>
            </GlobalContext.Provider>
        </AnotherGlobalContext.Provider>
    </div>)
}

function Child() {
    return (<div>
        <GrandChild/>
    </div>)
}

function GrandChild() {
    const global = useContext(GlobalContext);
    const anotherGlobal = useContext(AnotherGlobalContext);
    return (<div>
        i m grandChild: {global.name}
        <button onClick={() => global.setName("i m james_wicky GrandChild")}>
            Click me, change ContextName
        </button>
        <button onClick={() => global.log()}>
            Click me, just test log function
        </button>
        <div>
            anotherGlobal：{ anotherGlobal.anotherName }
        </div>
    </div>)
}