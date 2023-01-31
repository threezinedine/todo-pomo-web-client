import React, {
    ChangeEvent,
    useState,
} from 'react'
import 'materialize-css'
import {
    Button,
    TextInput,
} from 'react-materialize'

import {
    EMPTY_STRING,
    POST_METHOD,
    REGISTER_API_ROUTE,
    REGISTER_PAGE_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_PASSWORD_LABEL,
    REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID,
    REGISTER_PAGE_USERNAME_DATA_TEST_ID,
    REGISTER_PAGE_USERNAME_LABEL,
    REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_VALID_PASSWORD_LABEL,
} from 'const'
import api from 'api'


const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState(EMPTY_STRING)
    const [password, setPassword] = useState(EMPTY_STRING)

    return (
        <form>
            <TextInput 
                data-testid={REGISTER_PAGE_USERNAME_DATA_TEST_ID}
                label={REGISTER_PAGE_USERNAME_LABEL}
                value={username}
                onChange={(value: ChangeEvent<HTMLInputElement>): void => {
                    setUsername(value.target.value)
                }}
            />
            <TextInput 
                data-testid={REGISTER_PAGE_PASSWORD_DATA_TEST_ID}
                label={REGISTER_PAGE_PASSWORD_LABEL}
                value={password}
                onChange={(value: ChangeEvent<HTMLInputElement>): void => {
                    setPassword(value.target.value)
                }}
            />
            <TextInput 
                data-testid={REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID}
                label={REGISTER_PAGE_VALID_PASSWORD_LABEL}
            />
            <Button
                data-testid={REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID}
                onClick={() => {
                    api({
                        method: POST_METHOD,
                        url: REGISTER_API_ROUTE,
                        data: {
                            username,
                            password,
                        }
                    })
                        .catch(err => {
                            console.log(err)
                        })
                }}
            >
                Submit
            </Button>
        </form>
    )
}


export default RegisterPage
