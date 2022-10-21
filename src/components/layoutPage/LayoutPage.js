import React, { useState } from "react"
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Layout, Menu, Input, Row, Col, Dropdown, Button, Avatar } from "antd"
const { Header, Content, Footer, Sider } = Layout
import { Outlet, NavLink } from "react-router-dom"
import "antd/dist/antd.css"
import "./layout.css"

const items = [
  {
    key: "",
    label: <NavLink to='/'>Dashboard</NavLink>,
  },
  {
    key: "employees",
    label: (
      <>
        <NavLink to={`/employees`}>Employees</NavLink>
      </>
    ),
  },
  {
    key: "Report",
    label: <NavLink to='/report'>Report</NavLink>,
  },
  {
    key: "Calendar",
    label: <NavLink to='/calendar'>Calendar</NavLink>,
  },
]

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <h1 style={{ color: "white", margin: "20px" }}>EAU DE WEB</h1>
        <Menu
          theme='dark'
          defaultSelectedKeys={["1"]}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          HR
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutPage
