import React, { useState } from 'react';
import {
    Row,
    Col,
    Card,
    Typography,
    Button,
    Select,
    Input,
    Pagination,
    Checkbox,
    Slider,
    Divider,
    Tag,
    Breadcrumb
} from 'antd';
import {
    ShoppingCartOutlined,
    EyeOutlined,
    SearchOutlined,
    FilterOutlined,
    SortAscendingOutlined,
    RightOutlined,
    HomeOutlined
} from '@ant-design/icons';
import styled from 'styled-components';
import { Link, useSearchParams } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

const Container = styled.div`
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
  margin-bottom: 20px !important;
`;

const FilterSection = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const FilterTitle = styled(Title)`
  font-size: 16px !important;
  margin-bottom: 15px !important;
  color: #003d79 !important;
`;

const FilterGroup = styled.div`
  margin-bottom: 20px;
`;

const ProductCard = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  height: 100%;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
  
  .ant-card-cover img {
    height: 200px;
    object-fit: cover;
  }
  
  .ant-card-body {
    padding: 20px;
  }
`;

const ProductTitle = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: #003d79;
  margin-bottom: 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  &:hover {
    color: #ffd100;
  }
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #f5222d;
  margin: 10px 0;
`;

const ProductDescription = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 15px;
  height: 40px;
`;

const ProductMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #888;
  font-size: 14px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 300px;
`;

const SortBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const TagContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ProductListPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const productType = searchParams.get('type') || 'cars';
    const [filters, setFilters] = useState({
        priceRange: [0, 2000],
        brands: [],
        types: [],
        years: [],
    });
    const [sorting, setSorting] = useState('newest');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Mock data
    const products = productType === 'cars' ? [
        {
            id: 1,
            title: 'Toyota Camry 2.5Q',
            price: '1.345.000.000 đ',
            image: '/images/products/car1.jpg',
            description: 'Động cơ 2.5L, 4 xy-lanh, công suất 180 mã lực, hộp số tự động 8 cấp',
            type: 'Sedan',
            brand: 'Toyota',
            year: 2023
        },
        {
            id: 2,
            title: 'Honda Civic RS',
            price: '870.000.000 đ',
            image: '/images/products/car2.jpg',
            description: 'Động cơ VTEC 1.5L Turbo, công suất 170 mã lực, hộp số CVT',
            type: 'Sedan',
            brand: 'Honda',
            year: 2023
        },
        {
            id: 3,
            title: 'Mazda CX-5 2.5 Signature Premium',
            price: '979.000.000 đ',
            image: '/images/products/car3.jpg',
            description: 'Động cơ 2.5L, công suất 188 mã lực, hộp số tự động 6 cấp',
            type: 'SUV',
            brand: 'Mazda',
            year: 2022
        },
        {
            id: 4,
            title: 'Hyundai Tucson 1.6 Turbo',
            price: '919.000.000 đ',
            image: '/images/products/car4.jpg',
            description: 'Động cơ 1.6L Turbo, công suất 180 mã lực, hộp số tự động 7 cấp ly hợp kép',
            type: 'SUV',
            brand: 'Hyundai',
            year: 2022
        },
        {
            id: 5,
            title: 'Ford Everest Titanium 2.0L AT 4x2',
            price: '1.299.000.000 đ',
            image: '/images/products/car5.jpg',
            description: 'Động cơ 2.0L Turbo, công suất 210 mã lực, hộp số tự động 10 cấp',
            type: 'SUV',
            brand: 'Ford',
            year: 2023
        },
        {
            id: 6,
            title: 'Kia K3 1.6 Premium',
            price: '659.000.000 đ',
            image: '/images/products/car6.jpg',
            description: 'Động cơ 1.6L, công suất 126 mã lực, hộp số tự động 6 cấp',
            type: 'Sedan',
            brand: 'Kia',
            year: 2022
        },
        {
            id: 7,
            title: 'Mercedes-Benz C200 Exclusive',
            price: '1.729.000.000 đ',
            image: '/images/products/car7.jpg',
            description: 'Động cơ 1.5L tăng áp, công suất 204 mã lực, hộp số tự động 9 cấp',
            type: 'Sedan',
            brand: 'Mercedes-Benz',
            year: 2023
        },
        {
            id: 8,
            title: 'BMW 320i Sport Line',
            price: '1.799.000.000 đ',
            image: '/images/products/car8.jpg',
            description: 'Động cơ 2.0L, công suất 184 mã lực, hộp số tự động 8 cấp',
            type: 'Sedan',
            brand: 'BMW',
            year: 2023
        }
    ] : [
        {
            id: 1,
            title: 'VinFast Feliz S',
            price: '29.900.000 đ',
            image: '/images/products/electric1.jpg',
            description: 'Pin lithium 3.5 kWh, quãng đường 198 km, tốc độ tối đa 80 km/h',
            type: 'Xe máy điện',
            brand: 'VinFast',
            year: 2023
        },
        {
            id: 2,
            title: 'Yadea Xmen',
            price: '18.990.000 đ',
            image: '/images/products/electric2.jpg',
            description: 'Pin 60V, quãng đường 80 km, tốc độ tối đa 50 km/h',
            type: 'Xe máy điện',
            brand: 'Yadea',
            year: 2022
        },
        {
            id: 3,
            title: 'Pega Newtech',
            price: '15.990.000 đ',
            image: '/images/products/electric3.jpg',
            description: 'Pin lithium 22Ah, quãng đường 90 km, tốc độ tối đa 60 km/h',
            type: 'Xe máy điện',
            brand: 'Pega',
            year: 2022
        },
        {
            id: 4,
            title: 'Dibao Jeek',
            price: '16.800.000 đ',
            image: '/images/products/electric4.jpg',
            description: 'Pin 48V 20Ah, quãng đường 70 km, tốc độ tối đa 55 km/h',
            type: 'Xe máy điện',
            brand: 'Dibao',
            year: 2022
        },
        {
            id: 5,
            title: 'Yadea S-Line',
            price: '21.990.000 đ',
            image: '/images/products/electric5.jpg',
            description: 'Pin lithium 60V 26Ah, quãng đường 90km, tốc độ tối đa 55 km/h',
            type: 'Xe máy điện',
            brand: 'Yadea',
            year: 2023
        },
        {
            id: 6,
            title: 'VinFast Klara S',
            price: '35.990.000 đ',
            image: '/images/products/electric6.jpg',
            description: 'Pin lithium 3.5 kWh, quãng đường 120 km, tốc độ tối đa 60 km/h',
            type: 'Xe máy điện',
            brand: 'VinFast',
            year: 2023
        }
    ];

    const uniqueBrands = Array.from(new Set(products.map(item => item.brand)));
    const uniqueTypes = Array.from(new Set(products.map(item => item.type)));
    const uniqueYears = Array.from(new Set(products.map(item => item.year)));

    const handlePriceChange = (value: [number, number]) => {
        setFilters({
            ...filters,
            priceRange: value,
        });
    };

    const handleBrandChange = (checkedValues: any) => {
        setFilters({
            ...filters,
            brands: checkedValues,
        });
    };

    const handleTypeChange = (checkedValues: any) => {
        setFilters({
            ...filters,
            types: checkedValues,
        });
    };

    const handleYearChange = (checkedValues: any) => {
        setFilters({
            ...filters,
            years: checkedValues,
        });
    };

    const handleSortChange = (value: string) => {
        setSorting(value);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            priceRange: [0, 2000],
            brands: [],
            types: [],
            years: [],
        });
        setSearchQuery('');
    };

    const renderProducts = () => {
        return (
            <Row gutter={[24, 24]}>
                {products.map(product => (
                    <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                        <ProductCard
                            hoverable
                            cover={<img alt={product.title} src={product.image} />}
                        >
                            <ProductTitle to={`/san-pham/${product.id}`}>{product.title}</ProductTitle>
                            <ProductDescription>{product.description}</ProductDescription>
                            <ProductMeta>
                                <span>{product.type}</span>
                                <span>{product.brand}</span>
                            </ProductMeta>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ActionButtons>
                                <Button
                                    type="primary"
                                    style={{ backgroundColor: '#003d79', width: '50%' }}
                                    icon={<EyeOutlined />}
                                >
                                    Chi tiết
                                </Button>
                                <Button
                                    type="primary"
                                    style={{ backgroundColor: '#ffd100', color: '#000', width: '50%' }}
                                    icon={<ShoppingCartOutlined />}
                                >
                                    Mua ngay
                                </Button>
                            </ActionButtons>
                        </ProductCard>
                    </Col>
                ))}
            </Row>
        );
    };

    return (
        <Container>
            <BreadcrumbContainer>
                <StyledBreadcrumb separator={<RightOutlined />}>
                    <Breadcrumb.Item>
                        <Link to="/"><HomeOutlined /> Trang chủ</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {productType === 'cars' ? 'Danh sách xe ô tô' : 'Danh sách xe máy điện'}
                    </Breadcrumb.Item>
                </StyledBreadcrumb>
            </BreadcrumbContainer>

            <PageTitle level={2}>
                {productType === 'cars' ? 'Danh sách xe ô tô' : 'Danh sách xe máy điện'}
            </PageTitle>

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={6}>
                    <FilterSection>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
                            <Title level={4} style={{ margin: 0 }}>Bộ lọc</Title>
                            <Button type="link" onClick={clearFilters}>Xóa bộ lọc</Button>
                        </div>

                        <TagContainer>
                            {filters.brands.length > 0 && filters.brands.map((brand: string) => (
                                <Tag key={brand} closable color="#003d79">{brand}</Tag>
                            ))}
                            {filters.types.length > 0 && filters.types.map((type: string) => (
                                <Tag key={type} closable color="#52c41a">{type}</Tag>
                            ))}
                            {filters.years.length > 0 && filters.years.map((year: number) => (
                                <Tag key={year} closable color="#1890ff">{year}</Tag>
                            ))}
                            {filters.priceRange[0] !== 0 || filters.priceRange[1] !== 2000 && (
                                <Tag closable color="#f50">
                                    {filters.priceRange[0]} - {filters.priceRange[1]} triệu
                                </Tag>
                            )}
                        </TagContainer>

                        <Divider />

                        <FilterGroup>
                            <FilterTitle level={5}>Thương hiệu</FilterTitle>
                            <Checkbox.Group onChange={handleBrandChange} value={filters.brands}>
                                <Row>
                                    {uniqueBrands.map(brand => (
                                        <Col span={24} key={brand} style={{ marginBottom: '8px' }}>
                                            <Checkbox value={brand}>{brand}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </FilterGroup>

                        <FilterGroup>
                            <FilterTitle level={5}>Loại xe</FilterTitle>
                            <Checkbox.Group onChange={handleTypeChange} value={filters.types}>
                                <Row>
                                    {uniqueTypes.map(type => (
                                        <Col span={24} key={type} style={{ marginBottom: '8px' }}>
                                            <Checkbox value={type}>{type}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </FilterGroup>

                        <FilterGroup>
                            <FilterTitle level={5}>Năm sản xuất</FilterTitle>
                            <Checkbox.Group onChange={handleYearChange} value={filters.years}>
                                <Row>
                                    {uniqueYears.map(year => (
                                        <Col span={24} key={year} style={{ marginBottom: '8px' }}>
                                            <Checkbox value={year}>{year}</Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </FilterGroup>

                        <FilterGroup>
                            <FilterTitle level={5}>Khoảng giá (triệu VNĐ)</FilterTitle>
                            <Slider
                                range
                                min={0}
                                max={productType === 'cars' ? 2000 : 50}
                                defaultValue={filters.priceRange}
                                onChange={handlePriceChange as any}
                                marks={productType === 'cars' ? {
                                    0: '0',
                                    500: '500',
                                    1000: '1000',
                                    1500: '1500',
                                    2000: '2000'
                                } : {
                                    0: '0',
                                    10: '10',
                                    20: '20',
                                    30: '30',
                                    40: '40',
                                    50: '50'
                                }}
                            />
                        </FilterGroup>
                    </FilterSection>
                </Col>

                <Col xs={24} lg={18}>
                    <TopBar>
                        <SearchBar>
                            <Input
                                placeholder="Tìm kiếm..."
                                prefix={<SearchOutlined />}
                                allowClear
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </SearchBar>

                        <SortBar>
                            <Text>Sắp xếp theo:</Text>
                            <Select
                                defaultValue="newest"
                                style={{ width: 150 }}
                                onChange={handleSortChange}
                            >
                                <Option value="newest">Mới nhất</Option>
                                <Option value="price-asc">Giá tăng dần</Option>
                                <Option value="price-desc">Giá giảm dần</Option>
                                <Option value="name-asc">Tên A-Z</Option>
                                <Option value="name-desc">Tên Z-A</Option>
                            </Select>
                        </SortBar>
                    </TopBar>

                    {renderProducts()}

                    <PaginationContainer>
                        <Pagination
                            current={currentPage}
                            onChange={handlePageChange}
                            total={100}
                            showSizeChanger={false}
                        />
                    </PaginationContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPage; 