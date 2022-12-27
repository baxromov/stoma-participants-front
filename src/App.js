
import CreateForm from "./components/CreateForm";
import { Card } from 'antd';
import { Watermark } from 'antd';
function App() {

  return (
    <>
      <Watermark content={['Micron Lab', 'Good Luck!!!']}>
        <h1 style={{ textAlign: 'center', color: '#fff' }}>MicronLab</h1>
        <div style={{ height: 50 }} />
        <Card id="wrapper">
          <CreateForm />
        </Card>
      </Watermark>

    </>
  );
}

export default App;
