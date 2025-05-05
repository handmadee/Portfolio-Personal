import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RightOutlined } from '@ant-design/icons';

const BannerContainer = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  position: relative;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    
    .banner-button {
      background-color: #d10a11;
      border-color: #d10a11;
      color: white;
    }
    
    .banner-content {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  
  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 20px;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const BannerTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  
  @media (max-width: 992px) {
    font-size: 20px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

const BannerDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 992px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const BannerButton = styled(Button)`
  background-color: white;
  color: #003d79;
  border: none;
  font-weight: bold;
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  
  .button-icon {
    margin-left: 8px;
    font-size: 12px;
  }
  
  @media (max-width: 768px) {
    height: 36px;
    padding: 0 15px;
    font-size: 13px;
  }
`;

interface BannerType {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

const PromotionBanners: React.FC = () => {
  const banners: BannerType[] = [
    {
      id: 1,
      title: 'Ưu đãi đặc biệt khi mua Honda City',
      description: 'Giảm đến 50 triệu và tặng kèm gói phụ kiện chính hãng',
      image: 'https://www.tienthu.com.vn/uploads/products/1/honda-city-2023-white.jpg',
      link: '/khuyen-mai/honda-city',
      color: '#d10a11'
    },
    {
      id: 2,
      title: 'Chương trình khuyến mãi Honda SH',
      description: 'Ưu đãi lớn, quà tặng giá trị cùng gói bảo dưỡng miễn phí',
      image: 'https://www.tienthu.com.vn/uploads/products/16/sh350i-den.jpg',
      link: '/khuyen-mai/honda-sh',
      color: '#003d79'
    },
    {
      id: 3,
      title: 'Dịch vụ bảo dưỡng xe tận nơi',
      description: 'Đặt lịch trực tuyến và nhận ưu đãi 20% phí dịch vụ',
      image: 'https://www.tienthu.com.vn/uploads/images/service.jpg',
      link: '/dich-vu/bao-duong',
      color: '#2a9d8f'
    }
  ];

  return (
    <BannerContainer>
      <Row gutter={[24, 0]}>
        {banners.map(banner => (
          <Col xs={24} md={8} key={banner.id}>
            <Banner style={{ backgroundImage: `url(${banner.image})` }}>
              <BannerContent className="banner-content">
                <BannerTitle>{banner.title}</BannerTitle>
                <BannerDescription>{banner.description}</BannerDescription>
                <Link to={banner.link}>
                  <BannerButton
                    className="banner-button"
                    style={{ borderColor: banner.color }}
                  >
                    Xem chi tiết
                    <RightOutlined className="button-icon" />
                  </BannerButton>
                </Link>
              </BannerContent>
            </Banner>
          </Col>
        ))}
      </Row>
    </BannerContainer>
  );
};

export default PromotionBanners; 