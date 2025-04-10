import { useState, useContext } from "react";
import GlobalContext from "./global-context.ts";

export default function TestUseContext() {
    const [name, setName] = useState("james_wicky");
    const context = {
        name,
        setName,
        log: () => {
            console.log("name: ", { name })
        },
    }

    return (<div>
        <GlobalContext.Provider value={context}>
            <Child></Child>
        </GlobalContext.Provider>
    </div>)
}

function Child() {
    return (<div>
        <GrandChild/>
    </div>)
}

function GrandChild() {
    const global = useContext(GlobalContext);
    return (<div>
        i m grandChild: {global.name}
        <button onClick={() => global.setName("i m james_wicky GrandChild")}>
            Click me, change ContextName
        </button>
        <button onClick={() => global.log()}>
            Click me, just test log function
        </button>
    </div>)
}