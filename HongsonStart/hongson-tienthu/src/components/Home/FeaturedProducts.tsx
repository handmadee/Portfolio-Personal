import React, { useState } from 'react';
import { Tabs, Row, Col, Card, Button, Tag, Skeleton } from 'antd';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductsContainer = styled.div`
  width: 100%;
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 30px;
  
  .ant-tabs-nav {
    margin-bottom: 30px;
    
    &::before {
      border-bottom: none;
    }
  }
  
  .ant-tabs-tab {
    font-size: 16px;
    padding: 10px 20px;
    margin: 0 10px;
    transition: all 0.3s;
    
    &:hover {
      color: #d10a11;
    }
    
    @media (max-width: 576px) {
      font-size: 14px;
      padding: 8px 12px;
      margin: 0 5px;
    }
  }
  
  .ant-tabs-tab-active {
    font-weight: bold;
    
    .ant-tabs-tab-btn {
      color: #d10a11 !important;
    }
  }
  
  .ant-tabs-ink-bar {
    background-color: #d10a11;
    height: 3px;
  }
`;

const ProductCard = styled(Card)`
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  border-radius: 8px;
  overflow: hidden;
  border: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    
    .product-actions {
      opacity: 1;
      transform: translateY(0);
    }
    
    .product-image {
      transform: scale(1.05);
    }
  }
  
  .ant-card-body {
    padding: 20px;
  }
  
  .ant-card-cover {
    overflow: hidden;
    height: 200px;
    background-color: #f5f5f5;
    
    img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    
    .ant-card-cover {
      height: 180px;
    }
  }
`;

const ProductTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  height: 48px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  @media (max-width: 768px) {
    font-size: 16px;
    height: 44px;
  }
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #d10a11;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const ProductDescription = styled.p`
  margin-bottom: 10px;
  color: #666;
  font-size: 14px;
  height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  @media (max-width: 768px) {
    height: 40px;
    -webkit-line-clamp: 2;
  }
`;

const ProductBrand = styled.div`
  margin-bottom: 10px;
  
  .brand-tag {
    font-size: 12px;
    color: #003d79;
    background-color: rgba(0, 61, 121, 0.1);
    border: none;
  }
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.9;
  transition: all 0.3s;
  transform: translateY(10px);
  
  button {
    flex: 1;
    margin: 0 5px;
    
    &:first-child {
      margin-left: 0;
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
  
  @media (max-width: 768px) {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface ProductType {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
  type: 'car' | 'motorcycle';
  brand: string;
}

const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(false);

  // Mock data for products
  const products: ProductType[] = [
    {
      id: 1,
      title: 'Honda City 2023',
      price: '550.000.000 đ',
      image: 'https://www.tienthu.com.vn/uploads/banners/151/city-2023.png',
      description: 'Mẫu sedan hạng B nổi bật với thiết kế hiện đại và tiết kiệm nhiên liệu.',
      type: 'car',
      brand: 'Honda'
    },
    {
      id: 2,
      title: 'Honda Civic RS',
      price: '870.000.000 đ',
      image: 'https://www.tienthu.com.vn/uploads/products/2/honda-civic-rs-4.jpg',
      description: 'Sedan thể thao với động cơ turbo mạnh mẽ và trang bị công nghệ hiện đại.',
      type: 'car',
      brand: 'Honda'
    },
    {
      id: 3,
      title: 'Honda SH350i',
      price: '150.000.000 đ',
      image: 'https://www.tienthu.com.vn/uploads/products/16/sh350i-den.jpg',
      description: 'Xe tay ga cao cấp với động cơ mạnh mẽ và thiết kế sang trọng, đẳng cấp.',
      type: 'motorcycle',
      brand: 'Honda'
    },
    {
      id: 4,
      title: 'Honda Vision 2022',
      price: '32.000.000 đ',
      image: 'https://www.tienthu.com.vn/uploads/products/21/4-vision-trang-ngoc-tranh.png',
      description: 'Xe tay ga phổ thông dành cho nữ với thiết kế nhỏ gọn và tiết kiệm xăng.',
      type: 'motorcycle',
      brand: 'Honda'
    },
    {
      id: 5,
      title: 'Honda CR-V',
      price: '1.118.000.000 đ',
      image: 'https://www.tienthu.com.vn/uploads/products/1/crv-den.jpg',
      description: 'SUV 7 chỗ rộng rãi với thiết kế hiện đại và nhiều tính năng an toàn.',
      type: 'car',
      brand: 'Honda'
    },
    {
      id: 6,
      title: 'Honda Wave Alpha',
      price: '18.000.000 đ',
      image: 'https://www.tienthu.com.vn/uploads/products/24/1-wave-alpha-do.jpg',
      description: 'Xe số bền bỉ, tiết kiệm nhiên liệu, phù hợp với mọi đối tượng.',
      type: 'motorcycle',
      brand: 'Honda'
    },
    {
      id: 7,
      title: 'Honda Accord',
      price: '1.350.000.000 đ',
      image: 'https://www.tienthu.com.vn/uploads/products/5/black-crystal-pearl.jpg',
      description: 'Sedan hạng sang với công nghệ tiên tiến và trải nghiệm lái đẳng cấp.',
      type: 'car',
      brand: 'Honda'
    },
    {
      id: 8,
      title: 'Honda Air Blade',
      price: '42.000.000 đ',
      image: 'https://www.tienthu.com.vn/uploads/products/23/11-air-blade-den-cam.png',
      description: 'Xe tay ga thể thao với thiết kế khí động học và động cơ tiết kiệm nhiên liệu.',
      type: 'motorcycle',
      brand: 'Honda'
    }
  ];

  const handleTabChange = (key: string) => {
    setLoading(true);
    setActiveTab(key);

    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const filterProducts = () => {
    if (activeTab === 'all') {
      return products;
    }
    return products.filter(product => product.type === activeTab);
  };

  const renderProducts = () => {
    const filteredProducts = filterProducts();

    return (
      <Row gutter={[24, 24]}>
        {filteredProducts.map(product => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            {loading ? (
              <ProductCard>
                <Skeleton active avatar paragraph={{ rows: 4 }} />
              </ProductCard>
            ) : (
              <ProductCard
                cover={
                  <div className="product-image-container">
                    <img
                      alt={product.title}
                      src={product.image}
                      className="product-image"
                    />
                  </div>
                }
                hoverable
              >
                <ProductTitle>{product.title}</ProductTitle>
                <ProductBrand>
                  <Tag className="brand-tag">{product.brand}</Tag>
                </ProductBrand>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductActions className="product-actions">
                  <Button
                    type="primary"
                    icon={<EyeOutlined />}
                    className={product.type === 'car' ? 'btn-car' : 'btn-bike'}
                  >
                    <Link to={`/san-pham/${product.id}`}>Chi tiết</Link>
                  </Button>
                  <Button
                    icon={<ShoppingCartOutlined />}
                    className={product.type === 'car' ? 'btn-car' : 'btn-bike'}
                    type="primary"
                  >
                    Đặt mua
                  </Button>
                </ProductActions>
              </ProductCard>
            )}
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <ProductsContainer>
      <StyledTabs
        defaultActiveKey="all"
        onChange={handleTabChange}
        centered
        items={[
          {
            label: 'Tất Cả Sản Phẩm',
            key: 'all',
          },
          {
            label: 'Ô Tô',
            key: 'car',
          },
          {
            label: 'Xe Máy',
            key: 'motorcycle',
          },
        ]}
      />
      {renderProducts()}
    </ProductsContainer>
  );
};

export default FeaturedProducts; 