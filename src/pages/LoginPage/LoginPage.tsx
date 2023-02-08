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
    LOGIN_PAGE_PASSWORD_MAX_LENGTH,
    LOGIN_PAGE_PASSWORD_MIN_LENGTH,
    LOGIN_PAGE_PASSWORD_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE,
    LOGIN_PAGE_PASSWORD_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
    LOGIN_PAGE_PASSWORD_MUST_HAVE_NO_SPACE_OR_CHARACTER_ERROR_MESSAGE,
    LOGIN_PAGE_USERNAME_DATA_TEST_ID,
    LOGIN_PAGE_USERNAME_LABEL,
    LOGIN_PAGE_USERNAME_MAX_LENGTH,
    LOGIN_PAGE_USERNAME_MIN_LENGTH,
    LOGIN_PAGE_USERNAME_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE,
    LOGIN_PAGE_USERNAME_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
    LOGIN_PAGE_USERNAME_MUST_HAVE_NO_SPACE_OR_CHARACTER_ERROR_MESSAGE,
    PASSWORD_KEY,
    USERNAME_KEY,
} from 'const'


const LoginPage: React.FC = () => {
    return (
        <Form
            wrapperCol={{ span: 8 }}
        >
            <Form.Item
                label={LOGIN_PAGE_USERNAME_LABEL}
                name={USERNAME_KEY}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!'
                    },
                    {
                        min: LOGIN_PAGE_USERNAME_MIN_LENGTH,
                        message: LOGIN_PAGE_USERNAME_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
                    },
                    {
                        max: LOGIN_PAGE_USERNAME_MAX_LENGTH,
                        message: LOGIN_PAGE_USERNAME_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE,
                    },
                    {
                        validator: (rule, value, callback) => {
                            // todo: the value should not contain any special characters
                            // or spaces.

                            if (!value.match(/^[a-zA-Z0-9]+$/) || value.contains(' ')) {
                                callback(LOGIN_PAGE_USERNAME_MUST_HAVE_NO_SPACE_OR_CHARACTER_ERROR_MESSAGE)
                            }
                            else {
                                callback()
                            }
                        }
                    },
                ]}
            >
                <Input 
                    data-testid={LOGIN_PAGE_USERNAME_DATA_TEST_ID}
                />
            </Form.Item>
            <Form.Item
                label={LOGIN_PAGE_PASSWORD_LABEL}
                name={PASSWORD_KEY}
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    {
                        min: LOGIN_PAGE_PASSWORD_MIN_LENGTH,
                        message: LOGIN_PAGE_PASSWORD_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
                    },
                    {
                        max: LOGIN_PAGE_PASSWORD_MAX_LENGTH,
                        message: LOGIN_PAGE_PASSWORD_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE,
                    },
                ]}
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