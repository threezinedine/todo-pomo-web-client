import React, {
    useState,
} from 'react'
import 'materialize-css'
import { 
    useFormik,
} from 'formik'
import { 
    Button,
    Form,
    Input,
} from 'antd'

import {
    EMPTY_STRING,
    PASSWORD_KEY,
    POST_METHOD,
    REGISTER_API_ROUTE,
    REGISTER_PAGE_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_PASSWORD_LABEL,
    REGISTER_PAGE_PASSWORD_MAX_LENGTH,
    REGISTER_PAGE_PASSWORD_MIN_LENGTH,
    REGISTER_PAGE_PASSWORD_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE,
    REGISTER_PAGE_PASSWORD_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
    REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID,
    REGISTER_PAGE_USERNAME_DATA_TEST_ID,
    REGISTER_PAGE_USERNAME_LABEL,
    REGISTER_PAGE_USERNAME_MAX_LENGTH,
    REGISTER_PAGE_USERNAME_MIN_LENGTH,
    REGISTER_PAGE_USERNAME_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE,
    REGISTER_PAGE_USERNAME_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
    REGISTER_PAGE_USERNAME_MUST_HAVE_NO_SPACE_OR_CHARACTER_ERROR_MESSAGE,
    REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID,
    REGISTER_PAGE_VALID_PASSWORD_LABEL,
    USERNAME_KEY,
    VALID_PASSWORD_KEY,
} from 'const'
import api from 'api'
import { 
    combineClassName,
} from 'utils'
import styles from './RegisterPage.module.scss'
import RegisterPageFormData from './RegisterPageFormData'
import { REGISTER_PAGE_LESS_THAN_MIN_NUMBER_CHARACTERS_USERNAME } from '../../../cypress/constants'


const st = combineClassName(styles)

const RegisterPage: React.FC = () => {
    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={(data) => {
                api({
                    method: POST_METHOD,
                    url: REGISTER_API_ROUTE,
                    data: {
                        username: data.username,
                        password: data.password,
                    }
                })
                    .catch((error) => {
                        console.log(error)
                    })
            }}
            autoComplete="off"
        >
            <Form.Item
                label={REGISTER_PAGE_USERNAME_LABEL}
                name={USERNAME_KEY}
                rules={[
                    {
                        required : true,
                        message: 'Please input your username!',
                    },
                    {
                        min: REGISTER_PAGE_USERNAME_MIN_LENGTH,
                        message: REGISTER_PAGE_USERNAME_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
                    },
                    {
                        max: REGISTER_PAGE_USERNAME_MAX_LENGTH,
                        message: REGISTER_PAGE_USERNAME_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE,
                    },
                    {
                        validator: (rule, value, callback) => {
                            // check if value contains space or special characters
                            // then call callback with error message
                            // otherwise
                            if (!value.match(/^[a-zA-Z0-9]+$/)) {
                                callback(REGISTER_PAGE_USERNAME_MUST_HAVE_NO_SPACE_OR_CHARACTER_ERROR_MESSAGE)
                            } else {
                                callback()
                            }
                        }
                    }
                ]}
            >
                <Input 
                    data-testid={REGISTER_PAGE_USERNAME_DATA_TEST_ID}
                />
            </Form.Item>
            <Form.Item
                label={REGISTER_PAGE_PASSWORD_LABEL}
                name={PASSWORD_KEY}
                rules={[
                    {
                        required : true,
                        message: 'Please input your password!',
                    },
                    {
                        min: REGISTER_PAGE_PASSWORD_MIN_LENGTH,
                        message: REGISTER_PAGE_PASSWORD_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
                    },
                    {
                        max: REGISTER_PAGE_PASSWORD_MAX_LENGTH,
                        message: REGISTER_PAGE_PASSWORD_MUST_HAVE_LESS_THAN_MAX_NUMBER_CHARACTERS_ERROR_MESSAGE,
                    },
                ]}
            >
                <Input 
                    data-testid={REGISTER_PAGE_PASSWORD_DATA_TEST_ID}
                />
            </Form.Item>
            <Form.Item
                label={REGISTER_PAGE_VALID_PASSWORD_LABEL}
                name={VALID_PASSWORD_KEY}
                rules={[
                    {
                        required : true,
                        message: 'Please input your valid password!',
                    }
                ]}
            >
                <Input 
                    data-testid={REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID}
                />
            </Form.Item>
            <Form.Item>
                <Button 
                    data-testid={REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID}
                    type='primary' 
                    htmlType='submit'>
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}


export default RegisterPage
