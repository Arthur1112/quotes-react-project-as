import React from "react";
import {useNavigate } from "react-router-dom";
import {Layout, Menu} from 'antd';
import { PlusCircleOutlined, HomeOutlined } from '@ant-design/icons';
import { ConfigProvider } from "antd";

const {Item} = Menu;

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

export default function Menubar() {
  let navigate = useNavigate()
  return(
    <Layout className="layout">
      <Menu theme="dark" mode='horizontal'>
        <Item key="home" onClick={() => navigate('/')}
          icon={<HomeOutlined style={{fontSize: '1.1em'}}/>}>
            Home Page
          </Item>
        <Item key="add" onClick={() => navigate('/quotes/addQuote')}
          icon={<PlusCircleOutlined style={{fontSize: '1.1em'}}/>}>
            Add Quote
        </Item>
      </Menu>
    </Layout>
  )
}