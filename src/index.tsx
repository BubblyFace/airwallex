import * as React from "react";
import { Component } from "./components";
import { createRoot } from 'react-dom/client';

const App = () => {
    return <Component />
}

const container = document.getElementById("airwallex")
const root = createRoot(container)
root.render(<App></App>);
