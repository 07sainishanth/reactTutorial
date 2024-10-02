// 1) import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


// 2) get a ref to div with root id
const el = document.getElementById('root');


// 3) tell react to take control of root
const root = ReactDOM.createRoot(el);


// 4) Create component
// function App() {
//     // <h4>this is an element</h4>
//     // let message = 'Hi Gorgeous!'
//     // if (Math.random() > 0.75) {
//     //     message = 'Hello beautiful!!'
//     // }

//     // const date = new Date();
//     // const time = date.toLocaleTimeString();
//     // React doesn't print objects
//     // return <h1>{message} {new Date().toLocaleDateString()}, {time}</h1>;
//     // const inputType  = "number"
//     // const minValue = 7
//     // return <input type={inputType} min={minValue}/>
//     // return <input type="number" min={5} max={17}/>
//     return <textarea autoFocus={true} />
// }


// 5) Show component on the screen.
root.render(<App />);