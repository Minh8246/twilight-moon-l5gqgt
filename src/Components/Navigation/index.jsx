import React, {useEffect} from 'react'
import {Dropdown, Menu} from 'antd'
import {StyledNav, NavContainer, MobileMenu, PCMenu} from './style'
import {DownOutlined} from '@ant-design/icons'
import DropdownIcon from '../../Images/dropdown'
import MenuIcon from '../../Images/menu'

const menuItems = [
  {
    label: 'Trang Chủ',
    key: 'home',
    link: '#',
    dropdown: [],
  },
  {
    label: (
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        Dự Án <DropdownIcon />
      </div>
    ),
    key: 'projects',
    link: '#',
    dropdown: [
      {label: 'Tin tức dự án', key: 'news1', link: '#'},
      {label: 'Tin tức thị trường', key: 'news2', link: '#'},
      {label: 'Tin tức nội bộ', key: 'news3', link: '#'},
      {label: 'Tạp chí nội bộ', key: 'news4', link: '#'},
    ],
  },
  {
    label: (
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        Giới Thiệu <DropdownIcon />
      </div>
    ),
    key: 'about',
    link: '#',
    dropdown: [
      {label: 'Tin tức dự án', key: 'news1', link: '#'},
      {label: 'Tin tức thị trường', key: 'news2', link: '#'},
      {label: 'Tin tức nội bộ', key: 'news3', link: '#'},
      {label: 'Tạp chí nội bộ', key: 'news4', link: '#'},
    ],
  },
  {
    label: (
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        Lĩnh Vực Hoạt Động <DropdownIcon />
      </div>
    ),
    key: 'services',
    link: '#',
    dropdown: [
      {label: 'Tư vấn chiến lược', key: 'news1', link: '#'},
      {label: 'Phát triển dự án', key: 'news2', link: '#'},
      {label: 'Định vị thương hiệu', key: 'news3', link: '#'},
      {label: 'Tổng Đại Lý', key: 'news4', link: '#'},
    ],
  },
  {
    label: 'Tuyển Dụng',
    key: 'careers',
    link: '#',
    dropdown: [],
  },
  {
    label: (
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        Tin Tức <DropdownIcon />
      </div>
    ),
    key: 'news',
    dropdown: [
      {label: 'Tin tức dự án', key: 'news1', link: '#'},
      {label: 'Tin tức thị trường', key: 'news2', link: '#'},
      {label: 'Tin tức nội bộ', key: 'news3', link: '#'},
      {label: 'Tạp chí nội bộ', key: 'news4', link: '#'},
    ],
    order: 5,
  },
  {
    label: 'Liên Hệ',
    key: 'contact',
    link: '#',
    dropdown: [],
  },
]

// const Navbar = () => (
//   <Menu
//     style={{backgroundColor: '#333840D6'}}
//     mode="horizontal"
//     items={items}
//   />
// )

const Navbar = () => {
  const renderDropdownMenu = items => (
    <Menu>
      {items.map(item => (
        <Menu.Item key={item.key}>
          <a href={item.link}>{item.label}</a>
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <>
      <StyledNav>
        <NavContainer>
          <MobileMenu>
            <MenuIcon />
          </MobileMenu>
          <img
            width="100"
            height="44"
            src={require(`../../Images/Logo.png`)}
            alt="logo"
          />
          <PCMenu>
            <Menu mode="horizontal" style={{backgroundColor: 'transparent'}}>
              {menuItems.map(item =>
                item.dropdown ? (
                  <Dropdown
                    key={item.key}
                    overlay={renderDropdownMenu(item.dropdown)}
                  >
                    <a
                      href={item.link}
                      style={{color: '#fff', padding: '0px 15px'}}
                    >
                      {item.label}
                    </a>
                  </Dropdown>
                ) : (
                  <Menu.Item key={item.key}>
                    <a href={item.link}>{item.label}</a>
                  </Menu.Item>
                ),
              )}
            </Menu>
          </PCMenu>
          <MobileMenu>
            <img src={require(`../../Images/glass.png`)} alt="logo" />
          </MobileMenu>
        </NavContainer>
      </StyledNav>
    </>
  )
}

export default Navbar
