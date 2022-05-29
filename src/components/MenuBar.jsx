import React from "react";
import {useNavigate } from "react-router-dom";
import {Menu} from 'antd';
import { PlusCircleOutlined, HomeOutlined } from '@ant-design/icons';

const {Item} = Menu;

export default function Menubar() {
  let navigate = useNavigate()
  return(
    <Menu theme='dark' mode='vertical'>
      <Item key="home" onClick={() => navigate('/')}
        icon={<HomeOutlined style={{fontSize: '1.1em'}}/>}>
          Home Page
        </Item>
      <Item key="add" onClick={() => navigate('/quotes/addQuote')}
        icon={<PlusCircleOutlined style={{fontSize: '1.1em'}}/>}>
          Add Quote
      </Item>
    </Menu>
  )
}