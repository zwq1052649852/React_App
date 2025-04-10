export default function MyComponent() {
    const game_arr = ["game1", "game2", "game3"];
    return (game_arr.map((item) => (
        <div key={item}>i m {item}</div>
    )))
}