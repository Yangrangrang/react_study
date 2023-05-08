import React, { useState } from 'react';
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
  >
    <MenuItem onClick={handleClose}>
      <Button color="inherit" sx={{ width: '100%', textAlign: 'left' }}>IT교육</Button>
      <Menu
        // anchorEl={Boolean(anchorEl) && anchorEl}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={handleClose}>프로그래밍 언어</MenuItem>
        <MenuItem onClick={handleClose}>웹 개발</MenuItem>
        <MenuItem onClick={handleClose}>모바일 개발</MenuItem>
        <MenuItem onClick={handleClose}>데이터 분석</MenuItem>
      </Menu>
    </MenuItem>
    <MenuItem onClick={handleClose}>공모전/대회</MenuItem>
    <MenuItem onClick={handleClose}>챌린지</MenuItem>
  </Menu>
  )
}
