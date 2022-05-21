import * as React from "react";
import { Component } from "./components";
import { MainContext } from './shared'
import { createRoot } from 'react-dom/client';


const App = () => {
    return <MainContext.Provider
        value={{
}}> <Component /></MainContext.Provider>
}

const container = document.getElementById("airwallex")
const root = createRoot(container)
root.render(<App></App>);
