import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

const customTheme: ThemeConfig = {
    token: {
        colorPrimary: '#003d79',
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: '#f5222d',
        colorInfo: '#1890ff',
        colorTextBase: '#333',
        colorBgBase: '#fff',
        fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        borderRadius: 4,
        wireframe: false,
    },
    components: {
        Button: {
            colorPrimary: '#003d79',
            algorithm: true,
        },
        Menu: {
            colorPrimary: '#003d79',
            colorItemBgSelected: 'rgba(0, 61, 121, 0.1)',
        },
        Pagination: {
            colorPrimary: '#003d79',
        },
        Table: {
            colorPrimary: '#003d79',
        },
        Checkbox: {
            colorPrimary: '#003d79',
        },
        Radio: {
            colorPrimary: '#003d79',
        },
        Switch: {
            colorPrimary: '#003d79',
        },
        Slider: {
            colorPrimary: '#003d79',
        },
        Tabs: {
            colorPrimary: '#003d79',
        },
    },
};

export default customTheme; 