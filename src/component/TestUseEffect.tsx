// 学习useEffect
import {useEffect, useState} from "react";

export default function TestUseEffect() {
    const [count, setCount] = useState(0);
    const [effectCount, setEffectCount] = useState(0)

    useEffect(() => {
        // 此处是副作用函数，每次count变化时都会执行
        // 并且生命周期是componentDidMount和componentDidUpdate的结合
        const timer = setInterval(() => {
            setEffectCount((effectCount) => effectCount + 2);
        }, 1000);

        // 组件卸载componentWillUnmount时执行
        // 清理函数主要做的是取消订阅，清除定时器，取消网络请求等，不能在这里执行有副作用的操作
        return () => {
            // 此处是清理函数
            // 每次调用副作用函数前都会执行该清理函数
            clearInterval(timer);
        }
    }, [])

    return (<div>
        <div onClick={() => setCount((count) => count + 1)}>i m effect Click me</div>
        <div>{ count }</div>
        <div>i m effectCount：{ effectCount }</div>
    </div>)
}