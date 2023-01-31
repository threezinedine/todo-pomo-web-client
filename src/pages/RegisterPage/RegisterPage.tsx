import React from 'react'
import 'materialize-css'
import {
    Button,
    TextInput,
} from 'react-materialize'


const RegisterPage: React.FC = () => {
    return (
        <form>
            <TextInput 
                label="Username"
            />
            <TextInput 
                label="Password"
            />
            <TextInput 
                label="Valid Password"
            />
            <Button
                onClick={() => {
                    console.log('Testing')
                }}
            >
                Submit
            </Button>
        </form>
    )
}


export default RegisterPage
