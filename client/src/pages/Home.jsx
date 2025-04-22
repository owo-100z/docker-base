import React from 'react';
import Layout from '@/layouts/Layout';
import TopSection from '@/components/TopSection';
import ListSection from '@/components/ListSection';
import { Typography, Button } from '@mui/material';

const Home = () => {

  const handleButtonClick = () => {
    comm.get({
      url: '/hello',
      params: {}
    }, (res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  };
      
  return (
    <Layout>
      <TopSection>
            <Typography variant="h4" sx={{ my: 2 }}>
            메인 내용
            </Typography>
            <Button
            variant='contained'
            color='primary'
            onClick={handleButtonClick}
            >
            버튼
            </Button>
      </TopSection>
      <ListSection title="테스트목록" items={[1, 2, 3]} />
    </Layout>
  );
};

export default Home;
