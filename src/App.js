
import CreateForm from "./components/CreateForm";
import { Card } from 'antd';
import { Typography, Image } from 'antd';
import {
  InstagramOutlined
} from '@ant-design/icons';
import logo from './images/log_micron.jpg'


const { Text } = Typography;
function App() {

  return (
    <>
      <Card id="wrapper">
        {/* <img src={logo} width={100} style = {{ alignSelf: 'center'}}/> */}
        <h1 style={{ textAlign: 'center', color: '#277ae6' }}>
          <Image
            src={logo}
            width={100}
          />
        </h1>

        <h1 style={{ textAlign: 'center', color: '#277ae6' }}>MicronLab</h1>
        <h4 style={{ color: "#fc0339", textAlign: 'center' }}><strong>Ro'yxatdan o'tish jarayonida siz bizning Instagram sahifamizga obuna bo'lishingiz kerak.</strong></h4>
        <h4 style={{ color: "#fc0339", textAlign: 'center' }}><strong>В процессе регистрации вы должны быть подписаны на нашу страницу в Instagram.</strong></h4>
        <h4 style={{ color: "#fc0339", textAlign: 'center' }}><strong>During the registration process, you must be subscribed to our Instagram page.</strong></h4>
        <h1 style={{ textAlign: 'center' }}><a href="https://www.instagram.com/micronlab_uz/" target="_blank"><InstagramOutlined />micronlab_uz</a></h1>
        <CreateForm />
      </Card>

    </>
  );
}

export default App;
