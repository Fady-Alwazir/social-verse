import { ConfigProvider } from 'antd';

const Theme = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#8BC747',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default Theme;
