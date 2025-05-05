import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import {
  DownOutlined,
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  background-color: #fff;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: auto;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: #f5f5f5;
  height: 40px;
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

const MainBanner = styled.div`
  display: flex;
  height: 80px;
  position: relative;
  overflow: hidden;
`;

const CarSection = styled(Link)`
  width: 35%;
  background-color: #d10a11;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  padding-left: 20px;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #b50000;
    color: white;
  }
  
  @media (max-width: 768px) {
    width: 35%;
  }
`;

const LogoSection = styled.div`
  width: 30%;
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 30%;
  }
`;

const BikeSection = styled(Link)`
  width: 35%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  padding-right: 20px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #222;
    color: white;
  }
  
  @media (max-width: 768px) {
    width: 35%;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    height: 60px;
    object-fit: contain;
  }
`;

const Navigation = styled.div`
  background-color: #003d79;
  padding: 0 50px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledMenu = styled(Menu)`
  background-color: #003d79;
  color: white;
  border: none;
  line-height: 46px;

  .ant-menu-item, .ant-menu-submenu {
    color: white;

    &:hover, &-active, &-selected {
      color: #ffd100 !important;
    }
  }

  .ant-menu-submenu-title {
    color: white;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuToggle = styled(Button)`
  display: none;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const SideNavDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
  
  .side-menu {
    border-right: 0;
  }
`;

const SideMenuItem = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 500;
  
  &.section-title {
    background-color: #f5f5f5;
    font-weight: bold;
    color: #003d79;
  }
  
  a {
    color: #333;
    display: block;
    width: 100%;
  }
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const VehicleIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  
  img {
    height: 24px;
    width: auto;
  }
`;

const CarIcon = styled.span`
  margin-right: 8px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const BikeIcon = styled.span`
  margin-left: 8px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Header: React.FC = () => {
  const [current, setCurrent] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleMenuClick = (e: any) => {
    setCurrent(e.key);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      <TopHeader>
        <div>
          Hotline: <strong>1800 255 898</strong> | Email: <strong>contact@tienthu.vn</strong>
        </div>
      </TopHeader>
      <StyledHeader>
        <MainBanner>
          <CarSection to="/pages/home-oto">
            <CarIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="#FFFFFF" />
              </svg>
            </CarIcon>
            Ô TÔ
          </CarSection>
          <LogoSection>
            <Logo>
              <Link to="/">
                <img src="/images/logo.svg" alt="Hồng Sơn Start Logo" />
              </Link>
            </Logo>
          </LogoSection>
          <BikeSection to="/danh-sach-xe-may-dien">
            XE MÁY
            <BikeIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 7h-.82l-1.7-4.54C16.18 1.65 15.42 1 14.6 1H12v2h2.6l1.46 3.88L12 8.8V17h-2v-3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v3H2v2h12.6l1.7-4.54c.2-.62.6-1.1 1.16-1.4.58-.32 1.28-.48 2-.54.33-.02.67-.04 1-.04h.32c-.48.36-.8.91-.8 1.52v4h2V13c0-.86-.7-1.56-1.56-1.56-.18 0-.34.03-.5.05-1.2.17-2.42.47-3.56.97-.88.38-1.54 1-1.98 1.78L12.82 17h-1.92l3.17-8.47 1.73-.44.7 1.91H19c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM8 7h3V5H8V2H6v3H3v2h3v3h2V7z" fill="#FFFFFF" />
              </svg>
            </BikeIcon>
          </BikeSection>
        </MainBanner>
        <Navigation>
          <StyledMenu
            mode="horizontal"
            onClick={handleMenuClick}
            selectedKeys={[current]}
          >
            <Menu.Item key="home">
              <Link to="/">Trang chủ</Link>
            </Menu.Item>
            <Menu.SubMenu key="cars" title="Ô tô">
              <Menu.Item key="honda-cars">
                <Link to="/pages/home-oto?brand=honda">Honda</Link>
              </Menu.Item>
              <Menu.Item key="toyota-cars">
                <Link to="/pages/home-oto?brand=toyota">Toyota</Link>
              </Menu.Item>
              <Menu.Item key="mazda-cars">
                <Link to="/pages/home-oto?brand=mazda">Mazda</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="bikes" title="Xe máy điện">
              <Menu.Item key="yadea-bikes">
                <Link to="/danh-sach-xe-may-dien?brand=yadea">Yadea</Link>
              </Menu.Item>
              <Menu.Item key="vinfast-bikes">
                <Link to="/danh-sach-xe-may-dien?brand=vinfast">VinFast</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="news">
              <Link to="/tin-tuc">Tin tức</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/ve-chung-toi">Về chúng tôi</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/lien-he">Liên hệ</Link>
            </Menu.Item>
          </StyledMenu>
          <MobileMenuToggle
            type="text"
            icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
            onClick={toggleDrawer}
          />
        </Navigation>
      </StyledHeader>

      <SideNavDrawer
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
        width={300}
        closeIcon={null}
      >
        <SideMenuItem className="section-title">DANH MỤC</SideMenuItem>
        <SideMenuItem>
          <Link to="/" onClick={toggleDrawer}>Trang chủ</Link>
        </SideMenuItem>
        <SideMenuItem className="section-title">Ô TÔ</SideMenuItem>
        <SideMenuItem>
          <Link to="/pages/home-oto?brand=honda" onClick={toggleDrawer}>
            <VehicleIcon>
              <img src="/images/brands/honda.svg" alt="Honda" />
            </VehicleIcon>
            Honda
          </Link>
        </SideMenuItem>
        <SideMenuItem>
          <Link to="/pages/home-oto?brand=toyota" onClick={toggleDrawer}>
            <VehicleIcon>
              <img src="/images/brands/toyota.svg" alt="Toyota" />
            </VehicleIcon>
            Toyota
          </Link>
        </SideMenuItem>
        <SideMenuItem>
          <Link to="/pages/home-oto?brand=mazda" onClick={toggleDrawer}>
            <VehicleIcon>
              <img src="/images/brands/mazda.svg" alt="Mazda" />
            </VehicleIcon>
            Mazda
          </Link>
        </SideMenuItem>
        <SideMenuItem className="section-title">XE MÁY ĐIỆN</SideMenuItem>
        <SideMenuItem>
          <Link to="/danh-sach-xe-may-dien?brand=yadea" onClick={toggleDrawer}>
            <VehicleIcon>
              <img src="/images/brands/yadea.svg" alt="Yadea" />
            </VehicleIcon>
            Yadea
          </Link>
        </SideMenuItem>
        <SideMenuItem>
          <Link to="/danh-sach-xe-may-dien?brand=vinfast" onClick={toggleDrawer}>
            <VehicleIcon>
              <img src="/images/brands/vinfast.svg" alt="VinFast" />
            </VehicleIcon>
            VinFast
          </Link>
        </SideMenuItem>
        <SideMenuItem className="section-title">KHÁM PHÁ</SideMenuItem>
        <SideMenuItem>
          <Link to="/tin-tuc" onClick={toggleDrawer}>Tin tức</Link>
        </SideMenuItem>
        <SideMenuItem>
          <Link to="/ve-chung-toi" onClick={toggleDrawer}>Về chúng tôi</Link>
        </SideMenuItem>
        <SideMenuItem>
          <Link to="/lien-he" onClick={toggleDrawer}>Liên hệ</Link>
        </SideMenuItem>
      </SideNavDrawer>
    </>
  );
};

export default Header; 