import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import xonelogo from '../../src/img/xonelogo.png';
import GradeIcon from '@mui/icons-material/Grade';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import { Box, Link } from '@mui/material';
import { Mypage } from '../user/Mypage';
import { UserContext } from '../user/UserContext';
import { User } from '../user/User';
import { LocalStorage } from '../user/LocalStorge';

type HeaderProps = React.PropsWithChildren<{ isLoggedIn: boolean; onLogout: () => void; }>;

// 로컬에 로그인 정보가 있는 지 확인
const isAuthUser = (id: string, pw: string) => {
  let result = false;
  const user : User[] = LocalStorage.getUserItem();
}


export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  // local에서 로그인 정보 불러오기
  // const user = localStorage.getItem('user');
  
  // // user로그인 여부 확인
  // useEffect(() => {
  //   user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  // })

  // // 로그아웃
  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   setIsLoggedIn(false);
  // }
  

  const renderStatus = () => {
    if (isLoggedIn === true) {
      console.log("test");
      const userInfo = localStorage.getItem('user');
      const user = JSON.parse(userInfo!);
      return <h4 style={{color: 'black'}}>{userInfo ? user.userName : ''}님 반갑습니다.</h4>
    }
  }

  return (
    <Container>
      <AppBar position="static" style={{backgroundColor: '#fff' }} elevation={0} >
        <Container maxWidth="xl" sx={{m:0}}>
          <Toolbar sx={{m:"0"}}>

            <Link href="/" style={{ textDecoration:'none' }}>
              <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={xonelogo} alt="logo" style={{ height: '32px' }} />
              </Typography>
            </Link>

            <div style={{ flexGrow: 1 }}></div>
            {isLoggedIn ? (
            <>
              <Box sx={{mr: 2}}>
                {renderStatus()}
              </Box>
              <Button color="inherit" style={{ backgroundColor:' #e118a9'}} sx = {{borderRadius: '20px', mr: '10px', py:'1px' }}>
              로그아웃
              </Button>
            </>
            ) : (
              <>
              <Link href="/login" style={{ textDecoration:'none', color: '#fff' }}>
                <Button color="inherit" style={{ backgroundColor:' #e118a9'}} sx = {{borderRadius: '20px', mr: '10px', py:'1px' }}>
                로그인
                </Button>
              </Link>

              <Link href="/join" style={{ textDecoration:'none', color: '#fff' }}>
                <Button style={{color: '#e118a9'}} sx = {{borderRadius: '20px', border:1 , borderColor: '#e118a9', py:'1px'}}>
                  회원가입
                </Button>
              </Link>
            </>
            )}

            <IconButton >
              <Link href='/mypage' style={{ color:' #e118a9'}}>
                <FaceRoundedIcon/>
              </Link>
            </IconButton>
            <IconButton style={{ color:' #e118a9'}}>
              <PaidRoundedIcon/>
            </IconButton>
            <IconButton style={{ color:' #e118a9'}}>
              <GradeIcon />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  );
}
export default Header;