// 1) import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";


// 2) get a ref to div with root id
const el = document.getElementById('root');


// 3) tell react to take control of root
const root = ReactDOM.createRoot(el);


// 4) Create component
function App() {
    return <h1>Hi there!</h1>;
}
// 5) Show component on the screen.
root.render(<App />);