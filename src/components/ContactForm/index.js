import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { sendEmail } from '../../utils/emailAPI';

const { TextArea } = Input;


function ContactForm() {
    const [form] = Form.useForm();

    const [formState, setFormState] = useState({
        email: '',
        name: '',
        message: '',
        alerts: ''
    });

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
            className="col-md-4"
            form={form}
            noValidate
            initialValues={{ remember: true, }}
            onFinish={handleEmailSend}>
            <h3>Contact</h3>

            {formState.alerts ?
                message[formState.alerts.type](formState.alerts.message).then(setFormState({ ...formState, alerts: '' }))
                :
                null
            }

            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        type: 'string',
                        required: true,
                        message: "Please enter your name!"
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
                label="Email"
                rules={[
                    {
                        type: 'email',
                        required: true,
                        message: 'Please enter an email address!',
                    },
                ]}
            ><Input
                    name="email"
                    placeholder="address@email.com.au"
                    value={formState.email}
                    onChange={onChange} />
            </Form.Item>

            <Form.Item
                label='Message'
                name="message">
                <TextArea
                    name="message"
                    row={5}
                    value={formState.message}
                    onChange={onChange} />
            </Form.Item>

            <Form.Item
                name="Submit">
                <Button
                    type="primary"
                    shape="round"
                    icon={<SendOutlined />}
                    htmlType="submit" > Send</Button>
            </Form.Item>

        </Form>
    )
}

export default ContactForm;