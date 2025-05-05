import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Row,
    Col,
    Typography,
    Button,
    Tabs,
    Table,
    Divider,
    Tag,
    Image,
    Form,
    Input,
    Select,
    message,
    Breadcrumb
} from 'antd';
import {
    ShoppingCartOutlined,
    PhoneOutlined,
    CarOutlined,
    SettingOutlined,
    DollarOutlined,
    InfoCircleOutlined,
    RightOutlined,
    HomeOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const ProductContainer = styled.div`
  padding: 30px 50px 60px;
`;

const BreadcrumbContainer = styled.div`
  margin-bottom: 30px;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  font-size: 14px;
`;

const ProductImagesContainer = styled.div`
  margin-bottom: 20px;
`;

const MainImage = styled.div`
  margin-bottom: 15px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  
  img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid transparent;
    
    &.active, &:hover {
      border-color: #003d79;
    }
  }
`;

const ProductTitle = styled(Title)`
  margin-bottom: 15px !important;
  color: #003d79 !important;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #f5222d;
  margin: 15px 0;
`;

const ProductAttribute = styled.div`
  display: flex;
  margin-bottom: 15px;
  
  .label {
    width: 120px;
    font-weight: bold;
    color: #666;
  }
  
  .value {
    flex: 1;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin: 30px 0;
`;

const ContactBox = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 30px;
  background-color: #f9f9f9;
`;

const ContactTitle = styled(Title)`
  font-size: 18px !important;
  margin-bottom: 15px !important;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  .icon {
    font-size: 20px;
    color: #003d79;
    margin-right: 10px;
  }
`;

const FormContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
`;

const StyledTabs = styled(Tabs)`
  margin-top: 40px;
  
  .ant-tabs-tab {
    font-size: 16px;
    padding: 10px 20px;
    
    &.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #003d79;
      font-weight: bold;
    }
  }
  
  .ant-tabs-ink-bar {
    background-color: #ffd100;
  }
  
  .ant-tabs-content {
    padding: 30px 0;
  }
`;

const SpecTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #f0f2f5;
    color: #003d79;
    font-weight: bold;
  }
`;

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [mainImage, setMainImage] = useState('/images/products/car1-1.jpg');
    const [form] = Form.useForm();

    // Mock data - in a real app, this would be fetched from an API
    const product = {
        id: 1,
        title: 'Toyota Camry 2.5Q',
        price: '1.345.000.000 đ',
        discount: '1.405.000.000 đ',
        description: 'Toyota Camry 2.5Q là mẫu sedan hạng D cao cấp với thiết kế sang trọng, động cơ mạnh mẽ và nhiều tính năng an toàn hiện đại.',
        brand: 'Toyota',
        type: 'Sedan',
        model: 'Camry',
        year: 2023,
        engineType: '2.5L, 4 xy-lanh',
        power: '180 mã lực',
        transmission: 'Hộp số tự động 8 cấp',
        fuel: 'Xăng',
        consumption: '7.2L/100km',
        warranty: '3 năm hoặc 100.000 km',
        images: [
            '/images/products/car1-1.jpg',
            '/images/products/car1-2.jpg',
            '/images/products/car1-3.jpg',
            '/images/products/car1-4.jpg',
        ],
        colors: ['Đen', 'Trắng', 'Bạc', 'Xanh'],
    };

    const specifications = [
        { key: '1', category: 'Động cơ', name: 'Loại', value: '2.5L, 4 xy-lanh' },
        { key: '2', category: 'Động cơ', name: 'Công suất cực đại', value: '180 mã lực / 6000 vòng/phút' },
        { key: '3', category: 'Động cơ', name: 'Mô-men xoắn cực đại', value: '235 Nm / 4100 vòng/phút' },
        { key: '4', category: 'Hộp số', name: 'Loại', value: 'Tự động 8 cấp' },
        { key: '5', category: 'Kích thước', name: 'Dài x Rộng x Cao', value: '4885 x 1840 x 1445 mm' },
        { key: '6', category: 'Kích thước', name: 'Chiều dài cơ sở', value: '2825 mm' },
        { key: '7', category: 'Kích thước', name: 'Khoảng sáng gầm', value: '150 mm' },
        { key: '8', category: 'Vận hành', name: 'Tiêu thụ nhiên liệu trung bình', value: '7.2L/100km' },
        { key: '9', category: 'Vận hành', name: 'Dung tích bình nhiên liệu', value: '60L' },
        { key: '10', category: 'Vận hành', name: 'Loại nhiên liệu', value: 'Xăng' },
    ];

    const specColumns = [
        { title: 'Hạng mục', dataIndex: 'name', key: 'name', width: 200 },
        { title: 'Thông số', dataIndex: 'value', key: 'value' },
    ];

    const handleSubmit = (values: any) => {
        console.log('Form values:', values);
        message.success('Đã gửi yêu cầu tư vấn thành công!');
        form.resetFields();
    };

    const handleAddToCart = () => {
        message.success('Đã thêm sản phẩm vào giỏ hàng!');
    };

    const handleBuyNow = () => {
        message.info('Đang chuyển đến trang thanh toán...');
    };

    return (
        <ProductContainer>
            <BreadcrumbContainer>
                <StyledBreadcrumb separator={<RightOutlined />}>
                    <Breadcrumb.Item>
                        <Link to="/"><HomeOutlined /> Trang chủ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/pages/home-oto">Xe ô tô</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/pages/home-oto?brand=toyota">Toyota</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{product.title}</Breadcrumb.Item>
                </StyledBreadcrumb>
            </BreadcrumbContainer>

            <Row gutter={[40, 40]}>
                <Col xs={24} lg={10}>
                    <ProductImagesContainer>
                        <MainImage>
                            <Image src={mainImage} alt={product.title} />
                        </MainImage>

                        <ThumbnailContainer>
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${product.title} - ${index + 1}`}
                                    className={mainImage === image ? 'active' : ''}
                                    onClick={() => setMainImage(image)}
                                />
                            ))}
                        </ThumbnailContainer>
                    </ProductImagesContainer>
                </Col>

                <Col xs={24} lg={14}>
                    <ProductTitle level={2}>{product.title}</ProductTitle>

                    <div>
                        <Tag color="#003d79">{product.brand}</Tag>
                        <Tag color="#52c41a">{product.type}</Tag>
                        <Tag color="#1890ff">Mới 100%</Tag>
                    </div>

                    <ProductPrice>
                        {product.price}
                        {product.discount && (
                            <Text delete style={{ fontSize: '16px', color: '#999', marginLeft: '10px' }}>
                                {product.discount}
                            </Text>
                        )}
                    </ProductPrice>

                    <Paragraph>{product.description}</Paragraph>

                    <Divider style={{ margin: '20px 0' }} />

                    <ProductAttribute>
                        <div className="label">Thương hiệu:</div>
                        <div className="value">{product.brand}</div>
                    </ProductAttribute>

                    <ProductAttribute>
                        <div className="label">Loại xe:</div>
                        <div className="value">{product.type}</div>
                    </ProductAttribute>

                    <ProductAttribute>
                        <div className="label">Động cơ:</div>
                        <div className="value">{product.engineType}</div>
                    </ProductAttribute>

                    <ProductAttribute>
                        <div className="label">Công suất:</div>
                        <div className="value">{product.power}</div>
                    </ProductAttribute>

                    <ProductAttribute>
                        <div className="label">Hộp số:</div>
                        <div className="value">{product.transmission}</div>
                    </ProductAttribute>

                    <ProductAttribute>
                        <div className="label">Nhiên liệu:</div>
                        <div className="value">{product.fuel}</div>
                    </ProductAttribute>

                    <Divider style={{ margin: '20px 0' }} />

                    <Form layout="vertical">
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={12}>
                                <Form.Item label="Màu sắc">
                                    <Select defaultValue={product.colors[0]} style={{ width: '100%' }}>
                                        {product.colors.map((color, index) => (
                                            <Option key={index} value={color}>{color}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Số lượng">
                                    <Input type="number" defaultValue={1} min={1} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                    <ActionButtons>
                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            size="large"
                            style={{ backgroundColor: '#003d79', minWidth: 150 }}
                            onClick={handleAddToCart}
                        >
                            Thêm vào giỏ
                        </Button>

                        <Button
                            type="primary"
                            size="large"
                            style={{ backgroundColor: '#ffd100', color: '#000', minWidth: 150 }}
                            onClick={handleBuyNow}
                        >
                            Mua ngay
                        </Button>
                    </ActionButtons>

                    <ContactBox>
                        <ContactTitle level={4}>Liên hệ tư vấn</ContactTitle>

                        <ContactItem>
                            <PhoneOutlined className="icon" />
                            <div>
                                <div>Hotline tư vấn:</div>
                                <div style={{ fontWeight: 'bold' }}>0123 456 789</div>
                            </div>
                        </ContactItem>

                        <FormContainer>
                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={handleSubmit}
                            >
                                <Row gutter={[16, 16]}>
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

                                    <Col span={24}>
                                        <Form.Item name="message" label="Nội dung">
                                            <Input.TextArea rows={3} placeholder="Nhập nội dung cần tư vấn" />
                                        </Form.Item>
                                    </Col>

                                    <Col span={24}>
                                        <Button type="primary" htmlType="submit" style={{ backgroundColor: '#003d79' }}>
                                            Gửi yêu cầu tư vấn
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </FormContainer>
                    </ContactBox>
                </Col>
            </Row>

            <StyledTabs defaultActiveKey="specifications">
                <TabPane
                    tab={
                        <span>
                            <SettingOutlined /> Thông số kỹ thuật
                        </span>
                    }
                    key="specifications"
                >
                    <SpecTable
                        columns={specColumns}
                        dataSource={specifications}
                        pagination={false}
                        bordered
                        rowKey="key"
                    />
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <InfoCircleOutlined /> Thông tin chi tiết
                        </span>
                    }
                    key="details"
                >
                    <Paragraph>
                        <Title level={4}>Toyota Camry 2.5Q - Đẳng cấp sedan hạng D</Title>
                        <Paragraph>
                            Toyota Camry 2.5Q là phiên bản cao cấp nhất trong dòng sedan hạng D của Toyota tại thị trường Việt Nam.
                            Xe sở hữu thiết kế sang trọng, nội thất rộng rãi cùng nhiều trang bị hiện đại, đáp ứng nhu cầu của khách hàng doanh nhân thành đạt.
                        </Paragraph>

                        <Title level={4}>Thiết kế ngoại thất</Title>
                        <Paragraph>
                            Toyota Camry 2.5Q sở hữu thiết kế ngoại thất hiện đại với lưới tản nhiệt cỡ lớn, cụm đèn pha LED thiết kế sắc sảo,
                            thân xe với những đường nét cuốn hút và đuôi xe tinh tế với cụm đèn hậu LED. Xe được trang bị mâm xe hợp kim 18 inch đa chấu,
                            tạo nên vẻ sang trọng và thể thao.
                        </Paragraph>

                        <Title level={4}>Nội thất tiện nghi</Title>
                        <Paragraph>
                            Không gian nội thất của Toyota Camry 2.5Q được thiết kế rộng rãi với ghế bọc da cao cấp, ghế lái chỉnh điện 10 hướng và ghế hành khách chỉnh điện 8 hướng.
                            Xe được trang bị hệ thống giải trí với màn hình cảm ứng 9 inch, hỗ trợ kết nối Apple CarPlay/Android Auto, hệ thống âm thanh 9 loa JBL cao cấp,
                            điều hòa tự động 3 vùng độc lập và cửa sổ trời toàn cảnh.
                        </Paragraph>

                        <Title level={4}>Động cơ mạnh mẽ, vận hành êm ái</Title>
                        <Paragraph>
                            Toyota Camry 2.5Q được trang bị động cơ xăng 2.5L, 4 xy-lanh, công suất 180 mã lực tại 6000 vòng/phút và mô-men xoắn cực đại 235 Nm tại 4100 vòng/phút.
                            Kết hợp với hộp số tự động 8 cấp, xe mang lại cảm giác lái mượt mà, êm ái và tiết kiệm nhiên liệu.
                        </Paragraph>

                        <Title level={4}>Trang bị an toàn tiên tiến</Title>
                        <Paragraph>
                            Toyota Camry 2.5Q được trang bị nhiều tính năng an toàn hiện đại như: 7 túi khí, hệ thống chống bó cứng phanh ABS, phân phối lực phanh điện tử EBD,
                            hỗ trợ phanh khẩn cấp BA, cân bằng điện tử VSC, kiểm soát lực kéo TRC, hỗ trợ khởi hành ngang dốc HAC, camera 360 độ và cảm biến hỗ trợ đỗ xe.
                        </Paragraph>
                    </Paragraph>
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <DollarOutlined /> Hình thức thanh toán
                        </span>
                    }
                    key="payment"
                >
                    <Title level={4}>Các hình thức thanh toán</Title>
                    <Paragraph>
                        <ul>
                            <li><strong>Thanh toán tiền mặt:</strong> Khách hàng có thể thanh toán trực tiếp tại showroom của Hồng sơn start.</li>
                            <li><strong>Chuyển khoản ngân hàng:</strong> Khách hàng có thể chuyển khoản vào tài khoản của công ty.</li>
                            <li>
                                <strong>Trả góp qua ngân hàng:</strong> Khách hàng có thể mua xe trả góp thông qua các ngân hàng đối tác với lãi suất ưu đãi:
                                <ul style={{ marginTop: 10 }}>
                                    <li>Hỗ trợ vay lên đến 80% giá trị xe</li>
                                    <li>Thời gian vay từ 3-8 năm</li>
                                    <li>Lãi suất ưu đãi từ 6.5%/năm</li>
                                    <li>Thủ tục đơn giản, giải ngân nhanh chóng</li>
                                </ul>
                            </li>
                        </ul>
                    </Paragraph>

                    <Title level={4}>Quy trình mua xe</Title>
                    <Paragraph>
                        <ol>
                            <li>Khách hàng lựa chọn xe và các tùy chọn</li>
                            <li>Ký hợp đồng mua bán và đặt cọc</li>
                            <li>Thanh toán đầy đủ hoặc làm thủ tục trả góp</li>
                            <li>Chuẩn bị giấy tờ đăng ký xe</li>
                            <li>Nhận xe và hoàn tất các thủ tục bàn giao</li>
                        </ol>
                    </Paragraph>
                </TabPane>
            </StyledTabs>
        </ProductContainer>
    );
};

export default ProductDetailPage; 