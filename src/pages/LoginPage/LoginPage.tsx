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
    return (
        <Form
            wrapperCol={{ span: 8 }}
        >
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
                <Input.Password 
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