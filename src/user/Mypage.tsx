import { useEffect, useState } from "react";
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SignIn from "../components/Login";

type MypageProps =  React.PropsWithChildren<{ isLoggedIn: boolean;}>

export const Mypage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = localStorage.getItem('user');
  
  useEffect(()=>{
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [isLoggedIn])

  const renderStatus = (bool : Boolean , user : string | null) => {
    let userItem = [];
    if(bool) {
      return userItem = JSON.parse(user!);
    }
  }

  if (isLoggedIn) {
    return (
      <>
      <Box  sx={{flexGrow:1 , mt : 4}}>
      <Typography variant="h4" component="h1" gutterBottom>
        마이페이지
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              회원 정보
            </Typography>
            <Typography variant="body1" gutterBottom>
              {/* 이름: {renderStatus(isLoggedIn, user)} */}
            </Typography>
            <Typography variant="body1" gutterBottom>
              이메일: test@example.com
            </Typography>
            <Typography variant="body1" gutterBottom>
              연락처: 010-1234-5678
            </Typography>
            <Button
              // className={classes.editButton}
              variant="outlined"
              color="primary"
            >
              회원 정보 수정
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              // className={classes.button}
              variant="contained"
              color="secondary"
            >
              회원 탈퇴
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </>
    )
  } else {
    return (
    <SignIn />
    )
  }

  return (
    < SignIn />
  )
  
}