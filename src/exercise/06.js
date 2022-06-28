// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from "react";

function UsernameForm({onSubmitUsername, ...props}) {
    const [username, setUsername] = useState('')
    const [error, setError] = useState(false)

    const errorMessage = 'Username must not be empty'

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmitUsername(username)
    }

    const handleChange = (event) => {
        let usernameInput = event.target.value
        //const isValidString = usernameInput === usernameInput.toLowerCase()
        setUsername(usernameInput.toLowerCase())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usernameInput">{props.inputLabel}: </label>
                <input type="text" id="usernameInput"
                       onChange={handleChange}
                       value={username}/>
            </div>
            {error ? <p style={{color: 'red'}}>{errorMessage}</p> : ''}
            <button type="submit" disabled={error}>{props.buttonLabel}</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm
        onSubmitUsername={onSubmitUsername}
        inputLabel="Username"
        buttonLabel="Submit"/>
}

export default App
