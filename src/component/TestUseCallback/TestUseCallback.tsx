import React, {useCallback, useState} from "react";

const ChildComponent = React.memo(function Child({ onClick }: { onClick: () => void }) {
    console.log("子组件渲染");
    return <button onClick={onClick}>子组件</button>;
});

function TestUseCallback() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((count) => count + 1);
    }, []);

    return (<div>
        <p>Count: { count }</p>
        <ChildComponent onClick={handleClick} />
    </div>)
};

export default TestUseCallback;