import React from 'react';
import { Row, Col, Typography, Card, Statistic } from 'antd';
import {
  CarOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import HeroCarousel from '../components/Home/HeroCarousel';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import PromotionBanners from '../components/Home/PromotionBanners';

const { Title, Paragraph } = Typography;

const Section = styled.section`
  padding: 60px 0;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px !important;
  color: #003d79 !important;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: #d10a11;
    margin: 15px auto 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 30px !important;
    font-size: 24px !important;
  }
`;

const AboutSection = styled(Section)`
  background-color: #f9f9f9;
`;

const AboutText = styled(Paragraph)`
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 30px;
  }
`;

const FeatureCard = styled(Card)`
  height: 100%;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  .ant-card-body {
    padding: 30px 20px;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
  
  .feature-icon {
    font-size: 40px;
    color: #003d79;
    margin-bottom: 20px;
  }
  
  .feature-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #003d79;
  }
  
  .feature-description {
    color: #666;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    
    .feature-icon {
      font-size: 32px;
      margin-bottom: 15px;
    }
    
    .feature-title {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;

const StatsSection = styled(Section)`
  background-color: #003d79;
  color: white;
  padding: 70px 0;
  
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-value {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffd100;
  }
  
  .stat-title {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
    
    .stat-value {ß
      font-size: 36px;
      margin-bottom: 5px;
    }
    
    .stat-title {
      font-size: 14px;
    }
  }
`;

interface FeatureType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatType {
  value: number;
  title: string;
  suffix?: string;
}

const HomePage: React.FC = () => {
  // Define features
  const features: FeatureType[] = [
    {
      icon: <CarOutlined className="feature-icon" />,
      title: 'Xe Chất Lượng',
      description: 'Chúng tôi cung cấp các dòng xe chính hãng với chất lượng đảm bảo và nhiều lựa chọn đa dạng.'
    },
    {
      icon: <SafetyCertificateOutlined className="feature-icon" />,
      title: 'An Toàn Là Hàng Đầu',
      description: 'Mọi sản phẩm của chúng tôi đều đáp ứng các tiêu chuẩn an toàn nghiêm ngặt nhất.'
    },
    {
      icon: <DollarOutlined className="feature-icon" />,
      title: 'Giá Cạnh Tranh',
      description: 'Cam kết mang đến cho khách hàng mức giá tốt nhất cùng nhiều ưu đãi hấp dẫn.'
    },
    {
      icon: <CustomerServiceOutlined className="feature-icon" />,
      title: 'Dịch Vụ 24/7',
      description: 'Đội ngũ tư vấn và hỗ trợ khách hàng chuyên nghiệp, sẵn sàng phục vụ mọi lúc.'
    }
  ];

  // Define stats
  const stats: StatType[] = [
    {
      value: 15,
      title: 'Năm kinh nghiệm',
      suffix: '+'
    },
    {
      value: 10000,
      title: 'Xe đã bán ra',
      suffix: '+'
    },
    {
      value: 5,
      title: 'Showroom trên toàn quốc'
    },
    {
      value: 24,
      title: 'Giờ hỗ trợ mỗi ngày',
      suffix: '/7'
    }
  ];

  return (
    <div className="home-page">
      <HeroCarousel />


      {/* Giới thiệu về Hồng sơn start */}
      <AboutSection>
        <Container>
          <SectionTitle level={2}>Về Hồng Sơn Start</SectionTitle>
          <AboutText>
            Hồng Sơn Start là đại lý phân phối ủy quyền chính thức của các hãng xe hàng đầu tại Việt Nam.
            Với hơn 15 năm kinh nghiệm, chúng tôi tự hào mang đến cho khách hàng những sản phẩm
            ô tô và xe máy chất lượng cùng dịch vụ chăm sóc khách hàng tận tâm. Sứ mệnh của
            chúng tôi là đem đến những phương tiện di chuyển an toàn, tiện nghi và thân thiện
            với môi trường với mức giá cạnh tranh nhất.
          </AboutText>

          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <FeatureCard>
                  {feature.icon}
                  <div className="feature-title">{feature.title}</div>
                  <div className="feature-description">{feature.description}</div>
                </FeatureCard>
              </Col>
            ))}
          </Row>
        </Container>
      </AboutSection>
      {/* Khuyến mãi đặc biệt */}
      <Section>
        <Container>
          <SectionTitle level={2}>Khuyến Mãi Đặc Biệt</SectionTitle>
          <PromotionBanners />
        </Container>
      </Section>
      {/* Sản phẩm nổi bật */}
      <Section>
        <Container>
          <SectionTitle level={2}>Sản Phẩm Nổi Bật</SectionTitle>
          <FeaturedProducts />
        </Container>
      </Section>
      {/* Thống kê */}
      <StatsSection>
        <Container>
          <Row gutter={[24, 24]}>
            {stats.map((stat, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <StatItem>
                  <div className="stat-value">
                    <Statistic
                      value={stat.value}
                      suffix={stat.suffix}
                      valueStyle={{ color: '#ffd100', fontSize: 'inherit', fontWeight: 'inherit' }}
                    />
                  </div>
                  <div className="stat-title">{stat.title}</div>
                </StatItem>
              </Col>
            ))}
          </Row>
        </Container>
      </StatsSection>
    </div>
  );
};

export default HomePage; 