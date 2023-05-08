import * as React from 'react';
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

type HeaderProps = React.PropsWithChildren<{ isLoggedIn: boolean; onLogout: () => void; }>;

export function Header(props : HeaderProps) {
  

  const renderStatus = (bool: Boolean) => {
    if (bool) {
      const userInfo = localStorage.getItem('user');
      const user = JSON.parse(userInfo!);
      return <h4 style={{color: 'black'}}>{userInfo ? user.lastName : ''}님 반갑습니다.</h4>
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
            {props.isLoggedIn ? (
            <>
              <Box sx={{mr: 2}}>
                {renderStatus(props.isLoggedIn)}
              </Box>
              <Button onClick={props.onLogout} color="inherit" style={{ backgroundColor:' #e118a9'}} sx = {{borderRadius: '20px', mr: '10px', py:'1px' }}>
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