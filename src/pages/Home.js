import {useContext}from "react";
import {StoreContext}from "../store";
import { Layout,Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

const { Header, Content, Footer ,Sider} = Layout;



function Home() {
  const { state: { page: {title, products} } } = useContext(StoreContext);
  return (
    <Layout className="container main-layout">
      <Sider
          className="layout-sider"
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
      >
          <div className="ham">
              <Menu theme="dark"
                    mode="inline" 
                    className="menu"
                    defaultSelectedKeys={['6']}>
                <Menu.Item key="1" className="menu-item">
                  <NavLink to="/tableware" >
                    Tableware
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2" className="menu-item">
                  <NavLink to="/cookware" >
                    Cookware
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3" className="menu-item">
                  <NavLink to="/home-accessories" >
                    Home accessories
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="4" className="menu-item">
                  <NavLink to="/lighting" >
                    Lighting
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="5" className="menu-item">
                  <NavLink to="/textile" >
                    Textile
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="6" className="menu-item">
                  <NavLink to="/furniture" >
                    Furniture
                  </NavLink>
                </Menu.Item>
              </Menu>
          </div>
        </Sider>
    <Layout>
      <Header className="layout-header">
        <AppHeader title={title}/>
      </Header>
      <Content className="layout-content">
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
    </Layout>
  );
}

export default Home;