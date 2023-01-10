
import CreateForm from "./components/CreateForm";
import { Card } from 'antd';
import { Typography } from 'antd';
import {
  InstagramOutlined
} from '@ant-design/icons';
const { Text } = Typography;
function App() {

  return (
    <>
        <Card id="wrapper">
        <h1 style={{ textAlign: 'center', color: '#277ae6' }}>MicronLab</h1>
          <h4 style={{color: "#fc0339", textAlign: 'center'}}><strong>В процессе регистрации вы должны быть подписаны на нашу страницу в Instagram.</strong></h4>
          <h1 style={{textAlign:'center'}}><a href="#"><InstagramOutlined/>username</a></h1>
          <CreateForm />
        </Card>


    </>
  );
}

export default App;
