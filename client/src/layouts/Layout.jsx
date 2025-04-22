import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Sidebar from '@/layouts/Sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => setIsSidebarOpen(true);
  const handleDrawerClose = () => setIsSidebarOpen(false);

  return (
    <div>
      <Box
      sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
      }}
      >
        {/* 최대 너비 500px로 모바일 레이아웃 */}
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Header onMenuClick={handleMenuClick} />
          <Sidebar open={isSidebarOpen} onClose={handleDrawerClose} />
          <Box sx={{ p: 2 }}>
            {children}
          </Box>
        </Box>
      </Box>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
