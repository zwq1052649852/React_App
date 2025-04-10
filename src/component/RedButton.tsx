import { useState } from "react";

function RedButton(props: { text: string, parentFn?: () => void }) {
    // eslint-disable-next-line prefer-const
    let [count, setCount] = useState(0);
    return (
        <div>
            <div>i m counter { count }</div>
            <button style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                margin: "10px",
            }} onClick={() => {
                setCount((count) => count + 1);
                props.parentFn && props.parentFn.call(null);
            }}>
                { props.text }
            </button>
        </div>
    )
}

export default RedButton;