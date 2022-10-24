import React, { useState } from "react"
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  CalendarOutlined,
} from "@ant-design/icons"
import { Layout, Menu } from "antd"
const { Header, Content, Footer, Sider } = Layout
import { Outlet, NavLink } from "react-router-dom"
import "antd/dist/antd.css"
import "./layout.css"

const items = [
  {
    key: "dashboard",
    label: <NavLink to='/'>Dashboard</NavLink>,
    icon: <DesktopOutlined />,
  },
  {
    key: "employees",
    label: <NavLink to={`/employees`}>Employees</NavLink>,
    icon: <TeamOutlined />,
  },
  {
    key: "Report",
    label: <NavLink to='/report'>Report</NavLink>,
    icon: <PieChartOutlined />,
  },
  {
    key: "Calendar",
    label: <NavLink to='/calendar'>Calendar</NavLink>,
    icon: <CalendarOutlined />,
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
      <Menu
        theme='dark'
        defaultSelectedKeys={["1"]}
        mode='horizontal'
        items={items}
      />
      <Layout className='site-layout'>
        {/* <Header
          className='site-layout-background'
          style={{
            padding: 0,
          }}
        /> */}
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
      </Layout>
    </Layout>
  )
}

export default LayoutPage
