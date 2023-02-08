import React from 'react'
import { 
    Form, 
    Input, 
    Button,
} from 'antd'
import { 
    LOGIN_PAGE_LOGIN_BUTTON_DATA_TEST_ID,
    LOGIN_PAGE_LOGIN_BUTTON_LABEL,
    LOGIN_PAGE_PASSWORD_DATA_TEST_ID,
    LOGIN_PAGE_PASSWORD_LABEL,
    LOGIN_PAGE_USERNAME_DATA_TEST_ID,
    LOGIN_PAGE_USERNAME_LABEL,
} from 'const'


const LoginPage: React.FC = () => {
    // todo: the login page using the ant design with form has the username, password
    // and the login button, the username and password must have more than 8 characters and less than 
    // 40 characters. the submit button will call the api to the server with the username and password
    // and the server will return the token and the user information. the token will be stored in the
    // local storage. 

    return (
        <Form>
            <Form.Item
                label={LOGIN_PAGE_USERNAME_LABEL}
            >
                <Input 
                    data-testid={LOGIN_PAGE_USERNAME_DATA_TEST_ID}
                />
            </Form.Item>
            <Form.Item
                label={LOGIN_PAGE_PASSWORD_LABEL}
            >
                <Input 
                    data-testid={LOGIN_PAGE_PASSWORD_DATA_TEST_ID}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    data-testid={LOGIN_PAGE_LOGIN_BUTTON_DATA_TEST_ID}
                >
                    { LOGIN_PAGE_LOGIN_BUTTON_LABEL }
                </Button>
            </Form.Item>

        </Form>
    )
}


export default LoginPage