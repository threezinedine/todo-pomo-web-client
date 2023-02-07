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
    REGISTER_PAGE_REGISTER_BUTTON_DATA_TEST_ID,
    REGISTER_PAGE_USERNAME_DATA_TEST_ID,
    REGISTER_PAGE_USERNAME_LABEL,
    REGISTER_PAGE_USERNAME_MIN_LENGTH,
    REGISTER_PAGE_USERNAME_MUST_HAVE_MORE_THAN_MIN_NUMBER_CHARACTERS_ERROR_MESSAGE,
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
    const formik = useFormik({
        initialValues: {
            username: EMPTY_STRING,
            password: EMPTY_STRING,
            validPassword: EMPTY_STRING,
        },
        onSubmit: (values) => {
            console.log(values)
            api({
                method: POST_METHOD,
                url: REGISTER_API_ROUTE,
                data: {
                    username: values.username,
                    password: values.password,
                },
            })
        },
        validate: (values) => {
            // the username should have the length <= 40 and >= 8 and has no space or special characters
            // the same as the password
            // the valid password should have the same value as the password.

            const errors: RegisterPageFormData = {
                username: EMPTY_STRING,
                password: EMPTY_STRING,
                validPassword: EMPTY_STRING,
            }

            if (values.username.length > 40 || values.username.length < 8) {
                errors.username = 'Username should have the length <= 40 and >= 8'
            } else if (values.username.match(/[^a-zA-Z0-9]/)) {
                errors.username = 'Username should not have special characters or space'
            }

            if (values.password.length > 40 || values.password.length < 8) {
                errors.password = 'Password should have the length <= 40 and >= 8'
            } else if (values.password.match(/[^a-zA-Z0-9]/)) {
                errors.password = 'Password should not have special characters or space'
            }

            if (values.password !== values.validPassword) {
                errors.validPassword = 'Password and valid password should be the same'
            }

            return errors
        }
    })


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
                data-testid={REGISTER_PAGE_USERNAME_DATA_TEST_ID}
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
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                data-testid={REGISTER_PAGE_PASSWORD_DATA_TEST_ID}
                label={REGISTER_PAGE_PASSWORD_LABEL}
                name={PASSWORD_KEY}
                rules={[
                    {
                        required : true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                data-testid={REGISTER_PAGE_VALID_PASSWORD_DATA_TEST_ID}
                label={REGISTER_PAGE_VALID_PASSWORD_LABEL}
                name={VALID_PASSWORD_KEY}
                rules={[
                    {
                        required : true,
                        message: 'Please input your valid password!',
                    }
                ]}
            >
                <Input />
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
