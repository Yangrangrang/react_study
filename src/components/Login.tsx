
// 로그인 페이지 input 태그 이용해서 로그인 화면 구현
// 로그인 버튼 클릭 시 아이디, 비밀번호 확인 후 로그인 true
// 회원가입 버튼 클릭 시 회원 가입 페이지로 이동
// 아이디 비밀번호 찾기 버튼 클릭 시 찾기 페이지로 이동
// 아이디 저장 체크 박스! 체크되어 있으면 아이디 저장 placeholder에 띄우기

import React, { useState , useEffect, useRef} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginUserService } from '../user/LoginUserService';
import { useNavigate } from 'react-router-dom';
import { LocalStorage } from '../user/LocalStorge';
import { User } from '../user/User';

const theme = createTheme();
const loginUserService = new LoginUserService();

export default function SignIn() {
  console.log("ren")
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const idInput = useRef<HTMLInputElement>(null!);
  const pwInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    idInput.current.focus();
  },[]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);

    const user : User | undefined = loginUserService.login(id,password);
    // const user : User | undefined = loginUserService.login(testid,testpw);


    if (user){
      LocalStorage.saveUserItem(user);
      window.location.href = '/';
    } else {
      // setError('아이디 또는 비밀번호가 일치 하지 않습니다.')
      alert('아이디 또는 비밀번호가 일치 하지 않습니다.');
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="아이디"
              name="id"
              ref={idInput}
              value={id}
              onChange={(event)=> setId(event.target.value)}
              autoComplete="id"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              // ref={pwInput}
              value={password}
              onChange={(event)=> setPassword(event.target.value)}
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="아이디 기억하기"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor:' #e118a9'}}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs={6}>
                <Link href="#" variant="body2">
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="/join" variant="body2">
                  회원가입
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}