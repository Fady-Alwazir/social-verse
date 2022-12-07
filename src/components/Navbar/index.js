import { Row, Col, Input } from 'antd';
import logo from '../../assets/VVERSE Logo.png';
import homepageIcon from '../../assets/Home, homepage, menu.svg';
import metaVerseIcon from '../../assets/012-metaverse.svg';
import piIcon from '../../assets/pi.svg';
import calendarIcon from '../../assets/calendar.svg';
import marketPlaceIcon from '../../assets/merketplace.svg';
import notificationIcon from '../../assets/notiffication icon.svg';
import messageIcon from '../../assets/message icon.svg';
import cartIcon from '../../assets/cart.svg';
import avatar from '../../assets/avatar-6.png';
import { SearchOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <Row
      style={{ backgroundColor: 'white', padding: '10px 40px' }}
      justify="space-evenly"
    >
      <Col xl={3} lg={1} md={0} sm={0} xs={0}>
        <img src={logo} alt="logo" />
      </Col>
      <Col xl={3} lg={4} md={4} sm={4} xs={4}>
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          style={{
            color: '#A5A29999',
            borderRadius: '11px',
            outline: 'none',
            maxWidth: '250px',
          }}
        ></Input>
      </Col>
      <Col xl={12}>
        <Row justify="center">
          <Col xl={3} lg={6} md={4} sm={4} xs={4}>
            <img src={homepageIcon} alt="homepageIcon" />
          </Col>
          <Col xl={3} lg={6} md={4} sm={4} xs={4}>
            <img src={metaVerseIcon} alt="metaVerseIcon" />
          </Col>
          <Col xl={3} lg={6} md={4} sm={4} xs={4}>
            <img
              src={piIcon}
              style={{
                marginTop: '-14px',
              }}
              alt="piIcon"
            />
          </Col>
          <Col xl={3} lg={6} md={4} sm={4} xs={4}>
            <img src={calendarIcon} alt="calendarIcon" />
          </Col>
          <Col xl={3} lg={6} md={4} sm={4} xs={4}>
            <img src={marketPlaceIcon} alt="marketPlaceIcon" />
          </Col>
        </Row>
      </Col>
      <Col xl={6}>
        <Row justify="end">
          <Col xl={4} lg={6} md={4} sm={4} xs={4}>
            <img src={notificationIcon} alt="notificationIcon" />
          </Col>
          <Col xl={4} lg={6} md={4} sm={4} xs={4}>
            <img src={messageIcon} alt="messageIcon" />
          </Col>
          <Col xl={4} lg={6} md={4} sm={4} xs={4}>
            <img src={cartIcon} alt="cartIcon" />
          </Col>
          <Col xl={4} lg={6} md={4} sm={4} xs={4}>
            <img src={avatar} alt="avatar" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Navbar;
