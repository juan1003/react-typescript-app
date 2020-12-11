import React from 'react'
import './App.css'

interface IState {
    message: string
}

const state: IState = {
    message: 'Nice, now we have TypeScript in our React Project!'
}

function App() {
    return(
        <div className="App">
            <h1>{state.message}</h1>
        </div>
    )
}

export default App