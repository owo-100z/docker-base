// src/components/TopSection.jsx
import React from 'react';
import { Paper, Typography, TextField, Box } from '@mui/material';

const TopSection = ({ children }) => {

  return (
    <Paper
      sx={{
        width: '100%',
        aspectRatio: '1 / 1',  // 정사각형 비율
        p: 2,
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* 최상단: 작은 부가내용 */}
      <Typography variant="caption" color="text.secondary">
        부가내용: 오늘의 업데이트
      </Typography>

      {/* 중앙: 메인 내용 (큰 글씨) - 가운데 정렬 */}
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        {children}
      </Box>

      {/* 최하단: 입력박스 */}
      <TextField fullWidth variant="outlined" placeholder="입력하세요..." />
    </Paper>
  );
};

export default TopSection;
