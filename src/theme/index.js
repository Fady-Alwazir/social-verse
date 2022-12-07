import { ConfigProvider } from 'antd';

const Theme = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#8BC747',
          colorSecondary: '#D4D4D873',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default Theme;
