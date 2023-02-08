import './CreateForm.css';
import { Button, Form, Input, Select, message, Upload, Typography } from 'antd';
import { React, useMemo, useState } from 'react';
import countryList from 'react-select-country-list';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import BackendUrl from '../BackendUrl';
import {
    InstagramOutlined
} from '@ant-design/icons';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        
      return e;
    }
    
    return e?.fileList;
  };
// const attachmentsUrl ='http://46.101.206.119:8000/attachments/'
const attachmentsUrl ='http://127.0.0.1:8000/attachments/'

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
function CreateForm() {
    const onFinish = (values) => {
        console.log(values);
        axios.post(
            BackendUrl,
            values
        ).then((res) => {
            if (res.status === 200 || res.status === 201) {
                console.log(res)
                window.location.replace(res.data.redirect_url)
                // message.success("Success")
            }
        }).catch((err) => {
            onFinishFailed(err);
        })
    };
    const onFinishFailed = (values) => {
        console.log("Errorlar: ", values)
        message.error(values.response.data.error);
    };
    const [value, setValue] = useState('')
    const [coutries, setCoutries] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(coutries)
    }

    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 10000);
    };
    return (
        <Form {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            onFinishFailed={onFinishFailed}
            size='large'
        >
            
            <Form.Item
                name='first_name'
                label="Имя"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='last_name'
                label="Фамилия"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Телефонный номер"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >

                <PhoneInput className='phone_input'
                    international
                    placeholder="Введите номер телефона"
                    value={value}
                    defaultCountry="UZ"
                    onChange={setValue} />
            </Form.Item>


            <Form.Item label="Страна"
                name='country'>
                <Select
                    showSearch
                    placeholder="Поиск по стране"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={options}
                    value={coutries}
                    onChange={changeHandler} />
            </Form.Item>

            <Form.Item
                name='address'
                label="Город / Район"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="instagram_username"
                label="Instagram Username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input prefix={<InstagramOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item label="Паспорт">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="file" action={attachmentsUrl}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Нажмите или перетащите файл в эту область, чтобы загрузить</p>
                        <p className="ant-upload-hint">Поддержка одиночной или массовой загрузки.</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
  
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                }}
            >

                <Button id='submit_button' type="primary" loading={loadings[0]} onClick={() => enterLoading(0)} htmlType="submit">
                    Следующий
                </Button>
            </Form.Item>
            
        </Form>
    );
}

export default CreateForm;
