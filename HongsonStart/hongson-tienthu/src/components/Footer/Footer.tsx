import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Footer: AntFooter } = Layout;

const StyledFooter = styled(AntFooter)`
  background-color: #111;
  padding: 50px 0 0 0;
  color: #aaa;
`;

const FooterBottom = styled.div`
  background-color: #000;
  padding: 15px 0;
  margin-top: 30px;
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;
  
  img {
    height: 50px;
    object-fit: contain;
  }
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #d10a11;
  }
`;

const FooterContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  
  i {
    margin-right: 10px;
    color: #d10a11;
    width: 18px;
    text-align: center;
  }
`;

const DealershipInfo = styled.div`
  margin-bottom: 20px;
`;

const DealershipHeading = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  a {
    font-size: 24px;
    color: #aaa;
    
    &:hover {
      color: #d10a11;
    }
  }
`;

const BusinessInfo = styled.div`
  text-align: center;
  color: #666;
  font-size: 12px;
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <Row gutter={[30, 30]}>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <FooterLogo>
                            <Link to="/">
                                <img src="/images/logo.png" alt="Hồng sơn start" />
                            </Link>
                        </FooterLogo>
                        <p>
                            Công ty TNHH Hồng sơn start - Đại lý phân phối chính thức xe ô tô Honda và xe máy tại Đà Nẵng và các tỉnh miền Trung.
                        </p>
                        <FooterContactItem>
                            <i className="fas fa-map-marker-alt"></i>
                            <div>179 Phan Châu Trinh, Quận Hải Châu, Tp. Đà Nẵng</div>
                        </FooterContactItem>
                        <FooterContactItem>
                            <i className="fas fa-phone-alt"></i>
                            <div>Hotline: 1800 255 898</div>
                        </FooterContactItem>
                        <FooterContactItem>
                            <i className="fas fa-envelope"></i>
                            <div>Email: contact@tienthu.vn</div>
                        </FooterContactItem>
                        <FooterContactItem>
                            <i className="fas fa-globe"></i>
                            <div>Website: tienthu.com.vn</div>
                        </FooterContactItem>
                        <SocialLinks>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </SocialLinks>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={8}>
                        <FooterHeading>Hệ thống Cửa hàng Xe máy</FooterHeading>
                        <DealershipInfo>
                            <DealershipHeading>Giờ mở cửa</DealershipHeading>
                            <p>07h30 - 17h30 từ Thứ Hai - Chủ Nhật</p>
                        </DealershipInfo>
                        <DealershipInfo>
                            <DealershipHeading>Hotline</DealershipHeading>
                            <p>1800 255 898</p>
                        </DealershipInfo>
                        <DealershipInfo>
                            <DealershipHeading>Website</DealershipHeading>
                            <p>tienthu.com.vn</p>
                        </DealershipInfo>
                        <div>
                            <img
                                src="https://www.tienthu.com.vn/uploads/images/banner_fb_tienthu.jpg"
                                alt="Xe Máy Hồng sơn start"
                                style={{ maxWidth: '100%', marginTop: '20px' }}
                            />
                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={8}>
                        <FooterHeading>Hệ thống Đại lý Ôtô</FooterHeading>
                        <DealershipInfo>
                            <DealershipHeading>Honda Ôtô Đà Nẵng - Cẩm Lệ</DealershipHeading>
                            <p>Địa chỉ: 36 Cách Mạng Tháng 8, P.Hòa Thọ Tây, Q.Cẩm Lệ, TP.Đà Nẵng</p>
                        </DealershipInfo>
                        <DealershipInfo>
                            <DealershipHeading>Honda Ôtô Quảng Nam - Tam Kỳ</DealershipHeading>
                            <p>Địa chỉ: Khối phố 4, Phường An Xuân, Tp. Tam Kỳ, Tỉnh Quảng Nam</p>
                        </DealershipInfo>
                        <DealershipInfo>
                            <DealershipHeading>Toyota Hồng sơn start - Quảng Ngãi</DealershipHeading>
                            <p>Địa chỉ: Lô A3 - KCN Quảng Phú - Tp. Quảng Ngãi - T. Quảng Ngãi</p>
                        </DealershipInfo>
                    </Col>
                </Row>
            </div>

            <FooterBottom>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <BusinessInfo>
                        © 2020 - Công ty TNHH Hồng sơn start. GPĐKKD: 0400126575 do Sở Kế hoạch và Đầu tư Thành phố Đà Nẵng Phòng Đăng Ký Kinh Doanh cấp
                    </BusinessInfo>
                </div>
            </FooterBottom>
        </StyledFooter>
    );
};

export default Footer; 