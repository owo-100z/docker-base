import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const ListSection = ({title, items}) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        {title || '목록'}
      </Typography>
      <List>
        {items?.map((_, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={`목록 항목 ${index + 1}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ListSection;
