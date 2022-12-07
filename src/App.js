import { Row, Col } from 'antd';

import { Navbar, Mirrors } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Row justify="center">
        <Col
          span={18}
          style={{
            paddingTop: '50px',
          }}
        >
          <Mirrors />
        </Col>
      </Row>
    </div>
  );
}

export default App;
