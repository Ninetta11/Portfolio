import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { sendEmail } from '../../utils/emailAPI';
import './style.css';

const { TextArea } = Input;


function ContactForm() {
    const [form] = Form.useForm();

    const [formState, setFormState] = useState({
        email: '',
        name: '',
        message: '',
        alerts: ''
    });

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 20 },
    };

    const onChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleEmailSend = () => {
        sendEmail(formState.email, formState.name, formState.message)
            .then((res) => {
                form.resetFields();
                setFormState({ ...formState, alerts: res, loading: false });
            }).catch((error) => {
                let alerts = { type: error.type, message: error.message };
                setFormState({ ...formState, alerts, loading: false });
            })
    }

    return (
        <Form
            {...layout}
            id="contact"
            className="col-md-4"
            form={form}
            noValidate
            initialValues={{ remember: true, }}
            onFinish={handleEmailSend}>
            {formState.alerts ?
                message[formState.alerts.type](formState.alerts.message).then(setFormState({ ...formState, alerts: '' }))
                :
                null
            }

            <Form.Item
                name="name"
                rules={[
                    {
                        type: 'string',
                        required: true,
                        message: "Please enter your name"
                    }
                ]}
            >
                <Input
                    name="name"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={onChange} />
            </Form.Item>

            <Form.Item
                name="email"
                rules={[
                    {
                        type: 'email',
                        required: true,
                        message: 'Please enter an email address',
                    },
                ]}
            ><Input
                    name="email"
                    placeholder="Enter your email address"
                    value={formState.email}
                    onChange={onChange} />
            </Form.Item>

            <Form.Item
                name="message">
                <TextArea
                    name="message"
                    placeholder="Add a message"
                    row={5}
                    value={formState.message}
                    onChange={onChange} />
            </Form.Item>

            <div style={{ textAlign: 'center' }}>
                <Form.Item
                    name="Submit">
                    <Button
                        type="primary"
                        shape="round"
                        icon={<SendOutlined />}
                        htmlType="submit" > Send</Button>
                </Form.Item>
            </div>

        </Form>
    )
}

export default ContactForm;