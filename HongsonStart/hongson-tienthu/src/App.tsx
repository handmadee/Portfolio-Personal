import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import vi_VN from 'antd/lib/locale/vi_VN';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import './App.css';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={vi_VN}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          {/* More routes will be added here */}
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App; 