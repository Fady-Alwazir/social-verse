import { Row, Col } from 'antd';

import { Navbar, Mirrors, Friends, Post, Dimensions } from './components';

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
          <Friends />
          <Post />
          <Dimensions />
        </Col>
      </Row>
    </div>
  );
}

export default App;
