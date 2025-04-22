import React, { useState } from 'react';
import {
  Drawer, Box, List, ListItemText,
  ListItemIcon, Collapse, Divider,
  ListItemButton
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = ({ open, onClose }) => {
  const [openItem1, setOpenItem1] = useState(false);
  const [openSubItem1, setOpenSubItem1] = useState(false);

  const handleItem1Click = () => {
    setOpenItem1(!openItem1);
  };

  const handleSubItem1Click = () => {
    setOpenSubItem1(!openSubItem1);
  };

  // 최종 뎁스 메뉴 클릭 시 Sidebar 닫기
  const handleFinalItemClick = (menuName) => {
    console.log('최종 뎁스 메뉴 클릭:', menuName);
    onClose(); // Sidebar 닫기
  };

  const sidebarContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {/* 1뎁스 메뉴 항목 1 */}
        <ListItemButton onClick={handleItem1Click}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="메뉴 항목 1" />
          {openItem1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* 2뎁스: 서브 메뉴 1.1 */}
        <Collapse in={openItem1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={handleSubItem1Click}>
              <ListItemText primary="서브 메뉴 1.1" />
              {openSubItem1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* 3뎁스: 서브 서브 메뉴 1.1.1, 1.1.2 (최종 뎁스) */}
            <Collapse in={openSubItem1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 6 }}
                  onClick={() => handleFinalItemClick('서브 서브 메뉴 1.1.1')}
                >
                  <ListItemText primary="서브 서브 메뉴 1.1.1" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 6 }}
                  onClick={() => handleFinalItemClick('서브 서브 메뉴 1.1.2')}
                >
                  <ListItemText primary="서브 서브 메뉴 1.1.2" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* 2뎁스: 서브 메뉴 1.2 (최종 뎁스) */}
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleFinalItemClick('서브 메뉴 1.2')}
            >
              <ListItemText primary="서브 메뉴 1.2" />
            </ListItemButton>
          </List>
        </Collapse>

        <Divider />

        {/* 1뎁스 메뉴 항목 2 (최종 뎁스) */}
        <ListItemButton onClick={() => handleFinalItemClick('메뉴 항목 2')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="메뉴 항목 2" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {sidebarContent}
    </Drawer>
  );
};

export default Sidebar;