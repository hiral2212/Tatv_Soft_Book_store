import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { Button } from '@mui/material';
const Login = (props) => {
    const [name,setName] = useState(props.name);
    // chagne name whith user entered in the text box
    const change = () => {
        const value = document.querySelector("input").value;
        if(value.length>0)
            setName(value);
        else
            setName(props.name);
    }
    return (<>
        <h1>Login page</h1>
        <input type="text" name="txt" onChange={change} />
        <p>hello {name}</p>
        <Button variant="contained">Contained</Button>

    </>);
}

export default Login;