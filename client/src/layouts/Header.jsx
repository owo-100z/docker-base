// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = ({ onMenuClick }) => {
  return (
    <AppBar
      position="static"
      enableColorOnDark
      color="inherit" // 다크 모드 시 기본 색상 대신 테마 색상 사용
      sx={{
        // 전체 배경색과 동일하게 지정
        backgroundColor: 'background.default',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
            backgroundColor: 'background.default',
            boxShadow: 'none',
        }}
      >
        {/* 좌측: 햄버거 메뉴 버튼 */}
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={onMenuClick}
          sx={{
            backgroundColor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            mr: 1,
            '&:hover': {
              backgroundColor: 'background.default',
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* 중앙: 프로젝트 이름 */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
          프로젝트 이름
        </Typography>

        {/* 우측: 설정 아이콘 */}
        <IconButton
          edge="end"
          aria-label="settings"
          sx={{
            backgroundColor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            ml: 1,
            '&:hover': {
              backgroundColor: 'background.default',
            },
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;