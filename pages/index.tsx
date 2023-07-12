import { Breadcrumb, Layout, Menu, Col, Row, theme } from "antd";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Layout.Header className="bg-white items-center flex sticky top-0 z-1 w-full">
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: 1,
              label: "Home",
            },
            {
              key: 2,
              label: "About",
            },
          ]}
        />
      </Layout.Header>
      <Layout.Content className="bg-white px-50">
        {children}
      </Layout.Content>
      <Layout.Footer className="text-center">
        Ant Design ©2023 Created by Ant UED
      </Layout.Footer>
    </Layout>
  );
};

export default RootLayout;
