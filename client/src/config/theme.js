// src/theme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // 다크 모드
    background: {
      default: '#1E1E1E', // 전체 배경색
      paper: '#2C2C2C',   // Paper, Card 등의 배경색
    },
    text: {
      primary: '#FFFFFF',   // 기본 텍스트 색상
      secondary: '#AAAAAA', // 보조 텍스트 색상
    },
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

export default darkTheme;
