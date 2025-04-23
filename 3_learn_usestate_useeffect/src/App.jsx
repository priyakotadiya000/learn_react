// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//    const incerment = () =>{
//         setCount (count+1)
//    }
//    const decerment = () =>{
//     setCount (count-1)
// }
        
//   return (
//     <>
      
      
//       <div className="card">
//           <h1>{count}</h1>
//          <button style={{marginLeft: '10px'}} onClick={incerment}>incerment</button>
//          <button onClick={decerment}> decrement </button>
         
//       </div>
      
//     </>
//   )
// }

// export default App



import './App.css'
import { BrowserRouter } from "react-router-dom";
import ARoutes from './Routes';

function App() {

  return (
    <BrowserRouter>
         <ARoutes/>
    </BrowserRouter>
    
      )
}

export default App;

