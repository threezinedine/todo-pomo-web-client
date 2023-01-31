import React from 'react'
import 'materialize-css'
import {
    Button,
    TextInput,
} from 'react-materialize'

import {
    REGISTER_PAGE_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_PASSWORD_LABEL,
    REGISTER_PAGE_USERNAME_DATA_TEST_ID,
    REGISTER_PAGE_USERNAME_LABEL,
    REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_VALID_PASSWORD_LABEL,
} from 'const'


const RegisterPage: React.FC = () => {
    return (
        <form>
            <TextInput 
                data-testid={REGISTER_PAGE_USERNAME_DATA_TEST_ID}
                label={REGISTER_PAGE_USERNAME_LABEL}
            />
            <TextInput 
                data-testid={REGISTER_PAGE_PASSWORD_DATA_TEST_ID}
                label={REGISTER_PAGE_PASSWORD_LABEL}
            />
            <TextInput 
                data-testid={REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID}
                label={REGISTER_PAGE_VALID_PASSWORD_LABEL}
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
