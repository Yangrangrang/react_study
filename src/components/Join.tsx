// import * as React from 'react';
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
import { User } from '../user/User';
import { UserService } from '../user/UserService';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Join() {
  console.log("render")
  
  const userService = new UserService();
  const [isRegistered, setIsRegistered] = useState(false);

  // input 값 저장
  const userNameRef = useRef<HTMLInputElement>(null);
  const userIdRef = useRef<HTMLInputElement>(null);
  const userPwRef = useRef<HTMLInputElement>(null);
  const userCheckPwRef = useRef<HTMLInputElement>(null);



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let indexStr = localStorage.getItem('userIndex');

    let index = Number(indexStr);
    index++;

    

    // const first = data.get('firstName') as string;
    // const last = data.get('lastName') as string;
    // const id = data.get('id') as string;
    // const password = data.get('password') as string;

    // const user : User = {id:index, firstName: first, lastName: last , userId : id, userPw : password};
    const user : User = {
      id:index, 
      userName: userNameRef.current?.value || "", 
      userId: userIdRef.current?.value || "" , 
      userPw : userPwRef.current?.value || "", 
      checkPw : userCheckPwRef.current?.value || "",
    };
    
    userService.register(user);

    localStorage.setItem('userIndex', String(index));

    setIsRegistered(true);
  };
  const navigate = useNavigate();

  useEffect(()=>{
    if (isRegistered) {
      navigate("/login");
    }
  }, [isRegistered]);

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
            회원가입 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="이름"
                  inputRef = {userNameRef}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="아이디"
                  name="id"
                  autoComplete="id"
                  inputRef={userIdRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  inputRef={userPwRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="check_password"
                  label="비밀번호 확인"
                  type="password"
                  id="check_password"
                  autoComplete="new-password"
                  inputRef={userCheckPwRef}
                />
              </Grid>
              <Box sx={{pl: 2, mt:2}}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="X1서비스 약관 동의"
                />
              </Box>
              <Box sx={{pl: 2}}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="개인정보 보호정책 및 수집 이용 안내"
                />
              </Box>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              style={{ backgroundColor:' #e118a9'}}
            >
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  이미 계정을 가지고 계십니까? 로그인
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}