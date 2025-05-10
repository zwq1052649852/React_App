import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestUseMemo from "./component/TestUseMemo/TestUseMemo.tsx";
// import TestUseReducer from "./component/TestUseReducer.tsx";
// import TestShopCar from "./component/TestShopCar.tsx"; 学习useState
// import TestUseEffect from "./component/TestUseEffect.tsx";
// import TestUseContext from "./component/TestUseContext.tsx";
// import TestUseCallback from "./component/TestUseCallback/TestUseCallback.tsx";

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          {/*<TestShopCar/>*/}
          {/*<TestUseEffect/>*/}
          {/*<TestUseContext/>*/}
          {/*{<TestUseReducer/>}*/}
          {/*{<TestUseCallback/>}*/}
          {<TestUseMemo/>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
