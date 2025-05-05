import React from 'react';
import {
    Row,
    Col,
    Typography,
    Form,
    Input,
    Button,
    Divider,
    Card,
    Breadcrumb
} from 'antd';
import {
    HomeOutlined,
    PhoneOutlined,
    MailOutlined,
    RightOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const ContactContainer = styled.div`
  padding: 30px 50px 60px;
`;

const BreadcrumbContainer = styled.div`
  margin-bottom: 30px;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  font-size: 14px;
`;

const PageTitle = styled(Title)`
  color: #003d79 !important;
  margin-bottom: 30px !important;
  position: relative;
  padding-bottom: 15px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #ffd100;
  }
`;

const ContactForm = styled(Card)`
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const ContactInfoCard = styled(Card)`
  padding: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  height: 100%;
  overflow: hidden;
`;

const CardTitle = styled.div`
  background-color: #003d79;
  color: white;
  padding: 15px 24px;
  font-size: 18px;
  font-weight: bold;
`;

const CardContent = styled.div`
  padding: 24px;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  
  .icon {
    font-size: 18px;
    color: #003d79;
    margin-right: 15px;
    margin-top: 4px;
  }
  
  .content {
    flex: 1;
  }
  
  .label {
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const MapContainer = styled.div`
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ShowroomSection = styled.div`
  margin-top: 50px;
`;

const ShowroomCard = styled(Card)`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  height: 100%;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ShowroomTitle = styled(Title)`
  font-size: 18px !important;
  color: #003d79 !important;
`;

const ContactPage: React.FC = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        console.log('Form values:', values);
        form.resetFields();
    };

    const showrooms = [
        {
            id: 1,
            name: 'Showroom Quận 1',
            address: '123 Đường Trần Hưng Đạo, Phường Nguyễn Thái Bình, Quận 1, TP. Hồ Chí Minh',
            phone: '0123 456 789',
            openingHours: '8:00 - 18:00 (Thứ 2 - Chủ nhật)'
        },
        {
            id: 2,
            name: 'Showroom Quận 5',
            address: '456 Đường Lê Lợi, Phường 10, Quận 5, TP. Hồ Chí Minh',
            phone: '0123 456 780',
            openingHours: '8:00 - 18:00 (Thứ 2 - Chủ nhật)'
        },
        {
            id: 3,
            name: 'Showroom Quận 7',
            address: '789 Đường Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh',
            phone: '0123 456 781',
            openingHours: '8:00 - 18:00 (Thứ 2 - Chủ nhật)'
        }
    ];

    return (
        <ContactContainer>
            <BreadcrumbContainer>
                <StyledBreadcrumb separator={<RightOutlined />}>
                    <Breadcrumb.Item>
                        <Link to="/"><HomeOutlined /> Trang chủ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
                </StyledBreadcrumb>
            </BreadcrumbContainer>

            <PageTitle level={2}>Liên hệ với chúng tôi</PageTitle>

            <Row gutter={[32, 32]}>
                <Col xs={24} lg={14}>
                    <ContactForm>
                        <Title level={4} style={{ marginBottom: 20 }}>Gửi thông tin liên hệ</Title>
                        <Paragraph style={{ marginBottom: 20 }}>
                            Vui lòng điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                        </Paragraph>

                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                        >
                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="name"
                                        label="Họ tên"
                                        rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                                    >
                                        <Input placeholder="Nhập họ tên của bạn" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item
                                        name="phone"
                                        label="Số điện thoại"
                                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                                    >
                                        <Input placeholder="Nhập số điện thoại của bạn" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    { required: true, message: 'Vui lòng nhập email' },
                                    { type: 'email', message: 'Email không hợp lệ' }
                                ]}
                            >
                                <Input placeholder="Nhập email của bạn" />
                            </Form.Item>

                            <Form.Item
                                name="subject"
                                label="Tiêu đề"
                                rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}
                            >
                                <Input placeholder="Nhập tiêu đề" />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label="Nội dung"
                                rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                            >
                                <TextArea rows={5} placeholder="Nhập nội dung" />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    style={{ minWidth: 150, backgroundColor: '#003d79' }}
                                >
                                    Gửi thông tin
                                </Button>
                            </Form.Item>
                        </Form>
                    </ContactForm>
                </Col>

                <Col xs={24} lg={10}>
                    <ContactInfoCard>
                        <CardTitle>Thông tin liên hệ</CardTitle>
                        <CardContent>
                            <ContactItem>
                                <HomeOutlined className="icon" />
                                <div className="content">
                                    <div className="label">Địa chỉ:</div>
                                    <div>123 Đường Trần Hưng Đạo, Quận 1, TP. Hồ Chí Minh</div>
                                </div>
                            </ContactItem>

                            <ContactItem>
                                <PhoneOutlined className="icon" />
                                <div className="content">
                                    <div className="label">Hotline:</div>
                                    <div>0123 456 789</div>
                                </div>
                            </ContactItem>

                            <ContactItem>
                                <MailOutlined className="icon" />
                                <div className="content">
                                    <div className="label">Email:</div>
                                    <div>info@tienthu.com.vn</div>
                                </div>
                            </ContactItem>

                            <Divider />

                            <Title level={5} style={{ color: '#003d79' }}>Giờ làm việc:</Title>
                            <Paragraph>
                                <strong>Thứ 2 - Thứ 6:</strong> 8:00 - 18:00
                            </Paragraph>
                            <Paragraph>
                                <strong>Thứ 7:</strong> 8:00 - 17:00
                            </Paragraph>
                            <Paragraph>
                                <strong>Chủ nhật:</strong> 8:00 - 12:00
                            </Paragraph>
                        </CardContent>
                    </ContactInfoCard>
                </Col>
            </Row>

            <MapContainer>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3193500366935!2d106.70093367486876!3d10.787570089318708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c586421ef%3A0xb606461945bd3b06!2zVHLhuqduIEjGsG5nIMSQ4bqhbywgUGjGsOG7nW5nIFBo4bqhbSBOZ8WpIEzDo28sIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1645178617218!5m2!1svi!2s"
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps - Hồng sơn start"
                ></iframe>
            </MapContainer>

            <ShowroomSection>
                <Title level={3} style={{ color: '#003d79', marginBottom: 30 }}>Hệ thống Showroom</Title>

                <Row gutter={[24, 24]}>
                    {showrooms.map(showroom => (
                        <Col xs={24} md={8} key={showroom.id}>
                            <ShowroomCard>
                                <ShowroomTitle level={4}>{showroom.name}</ShowroomTitle>
                                <Divider style={{ margin: '12px 0' }} />

                                <ContactItem>
                                    <EnvironmentOutlined className="icon" />
                                    <div className="content">
                                        <div className="label">Địa chỉ:</div>
                                        <div>{showroom.address}</div>
                                    </div>
                                </ContactItem>

                                <ContactItem>
                                    <PhoneOutlined className="icon" />
                                    <div className="content">
                                        <div className="label">Điện thoại:</div>
                                        <div>{showroom.phone}</div>
                                    </div>
                                </ContactItem>

                                <ContactItem style={{ marginBottom: 0 }}>
                                    <HomeOutlined className="icon" />
                                    <div className="content">
                                        <div className="label">Giờ mở cửa:</div>
                                        <div>{showroom.openingHours}</div>
                                    </div>
                                </ContactItem>
                            </ShowroomCard>
                        </Col>
                    ))}
                </Row>
            </ShowroomSection>
        </ContactContainer>
    );
};

export default ContactPage; 