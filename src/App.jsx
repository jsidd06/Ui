import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './views/HomeScreen/HomeScreen'
import '../src/style.css'

function App() {
    return (
        <>
        <BrowserRouter>
        <Route path="/" exact component={HomeScreen}></Route>
        </BrowserRouter>
        </>
    )
}

export default App
