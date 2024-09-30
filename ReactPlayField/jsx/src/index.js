// 1) import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";


// 2) get a ref to div with root id
const el = document.getElementById('root');


// 3) tell react to take control of root
const root = ReactDOM.createRoot(el);


// 4) Create component
function App() {
    // <h4>this is an element</h4>
    let message = 'Bye there!'
    if (Math.random() > 0.75) {
        message = 'Hello beautiful!!'
    }

    const date = new Date();
    const time = date.toLocaleTimeString();
    // React doesn't print objects
    return <h1>{message}, {new Date().toLocaleDateString()} , {time}</h1>;
}
// 5) Show component on the screen.
root.render(<App />);