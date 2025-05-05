import React, { useState, useEffect } from 'react';
import { Carousel, Button, Spin } from 'antd';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { RightOutlined, LeftOutlined, RightOutlined as ArrowRight } from '@ant-design/icons';
import { CarouselRef } from 'antd/lib/carousel';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  margin-top: 0;
  width: 100%;
  
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 0.3s;
  z-index: 1;
`;

const StyledCarousel = styled(Carousel)`
  .slick-dots {
    bottom: 20px;
    
    li button {
      background: white;
      opacity: 0.5;
      height: 10px;
      width: 10px;
      border-radius: 50%;
    }
    
    li.slick-active button {
      opacity: 1;
      background: #ffd100;
    }
  }
  
  .slick-slide {
    pointer-events: auto !important;
  }
  
  .slick-track {
    display: flex !important;
  }
  
  .slick-list {
    overflow: hidden;
  }
`;

const LoadingContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CarouselArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

const CarouselItem = styled.div`
  height: 500px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 992px) {
    height: 400px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CarouselBackground = styled.div<{ image: string; bgColor: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-color: ${props => props.bgColor};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const CarouselContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 80px;
  z-index: 2;
  opacity: 0;
  animation: ${slideUp} 0.8s ease-out forwards;
  animation-delay: 0.5s;
  
  @media (max-width: 1200px) {
    padding: 0 50px;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    padding: 0 40px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
  }
  
  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

const ProductLabel = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  margin-bottom: 10px;
  
  @media (max-width: 992px) {
    font-size: 36px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const CarButton = styled(Button)`
  margin-top: 30px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  padding: 0 30px;
  border-radius: 0;
  display: flex;
  align-items: center;
  background-color: #d10a11;
  border-color: #d10a11;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #b50000;
    border-color: #b50000;
  }
  
  .button-icon {
    margin-left: 12px;
  }
  
  @media (max-width: 768px) {
    margin-top: 15px;
    height: 40px;
    font-size: 14px;
    padding: 0 20px;
  }
  
  @media (max-width: 576px) {
    height: 36px;
    font-size: 12px;
    padding: 0 15px;
  }
`;

const BikeButton = styled(Button)`
  margin-top: 30px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  padding: 0 30px;
  border-radius: 0;
  display: flex;
  align-items: center;
  background-color: #333;
  border-color: #333;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #222;
    border-color: #222;
  }
  
  .button-icon {
    margin-left: 12px;
  }
  
  @media (max-width: 768px) {
    margin-top: 15px;
    height: 40px;
    font-size: 14px;
    padding: 0 20px;
  }
  
  @media (max-width: 576px) {
    height: 36px;
    font-size: 12px;
    padding: 0 15px;
  }
`;

interface CarouselItemType {
  id: number;
  bgColor: string;
  image: string;
  productType: 'car' | 'motorcycle';
  link: string;
}

const HeroCarousel: React.FC = () => {
  const carouselRef = React.useRef<CarouselRef>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const carouselItems: CarouselItemType[] = [
    {
      id: 1,
      bgColor: '#121212',
      image: 'https://www.tienthu.com.vn/uploads/banners/1/xe-may.jpg',
      productType: 'motorcycle',
      link: '/danh-sach-xe-may-dien'
    },
    {
      id: 2,
      bgColor: '#d10a11',
      image: 'https://www.tienthu.com.vn/uploads/banners/151/city-2023.png',
      productType: 'car',
      link: '/pages/home-oto'
    }
  ];

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  if (loading) {
    return (
      <LoadingContainer>
        <Spin size="large" tip="Đang tải..." />
      </LoadingContainer>
    );
  }

  return (
    <CarouselContainer>
      <StyledCarousel
        autoplay
        ref={carouselRef}
        dots={true}
        draggable
        swipeToSlide
        infinite
        speed={800}
      >
        {carouselItems.map(item => (
          <CarouselItem key={item.id}>
            <CarouselBackground
              image={item.image}
              bgColor={item.bgColor}
            />
            <CarouselContent>
              <ProductLabel>
                {item.productType === 'car' ? 'Ô TÔ' : 'XE MÁY'}
              </ProductLabel>
              {item.productType === 'car' ? (
                <CarButton type="primary">
                  <Link to={item.link} style={{ color: 'white' }}>
                    KHÁM PHÁ NGAY
                    <RightOutlined className="button-icon" />
                  </Link>
                </CarButton>
              ) : (
                <BikeButton type="primary">
                  <Link to={item.link} style={{ color: 'white' }}>
                    KHÁM PHÁ NGAY
                    <RightOutlined className="button-icon" />
                  </Link>
                </BikeButton>
              )}
            </CarouselContent>
          </CarouselItem>
        ))}
      </StyledCarousel>

      <CarouselArrow className="prev" onClick={handlePrev}>
        <LeftOutlined />
      </CarouselArrow>

      <CarouselArrow className="next" onClick={handleNext}>
        <ArrowRight />
      </CarouselArrow>
    </CarouselContainer>
  );
};

export default HeroCarousel; 