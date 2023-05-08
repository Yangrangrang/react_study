import { Box, Container,Grid,Typography} from "@mui/material"
import MainBanner from "../img/mainbanner.png"
import LooksOneIcon from '@mui/icons-material/LooksOne';
import { Height } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const MainLayout = () => {

  
  return (
    <Container>
      {/* 메인배너 */}
      <Box 
        component="img"
        sx={{ 
          width: 1152,
          maxWidth: { xs:1200},
          }} 
          alt="mainBanner"
          src={MainBanner}
          >
      </Box>

      {/* 엑스원이 처음이신가요? */}
      <Grid container sx={{height:80, backgroundColor:"white", boxShadow:3}}>

        <Grid item xs={2}>
          <Box sx={{my:1 ,textAlign:"left", ml:4}}>
            <Typography component="h1" variant="h6">엑스원이</Typography>
            <Typography component="h1" variant="h6">처음이신가요?</Typography>
          </Box>
        </Grid>
        
        <Grid item xs={10}>
          <Box sx={{ display: 'flex'}}>

            {/* 여기 쪼개자 props: string */}
            <Box sx={{ display: 'flex', m: "auto", my:3}}>
              <Typography>X1 소개</Typography>
            </Box>
            <Box sx={{ display: 'flex' , m: "auto"}}>
              <Typography>X1 소개</Typography>
            </Box>
            <Box sx={{ display: 'flex', m: "auto"}}>
              <Typography>X1 소개</Typography>
            </Box>
            <Box sx={{ display: 'flex', m: "auto"}}>
              <Typography>X1 소개</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* 오늘의 투자 전략 */}
      <Grid container sx={{height:180, backgroundColor:"#fff2c8"}}>

        <Grid item xs={2}>
          <Box sx={{my:5 , fontWeight:"bold", textAlign:"left", ml:4}}>
            <Box component="h2" sx={{my:1}}>오늘의</Box>
            <Box component="h2" sx={{my:1}}>투자 전략</Box>
            <Link to={"#"} >더보기</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sx={{ display:'flex', height:'100%', mb:8}} >
          <Box
          sx={{
            width:'100%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent:'space-between',
            p: 1, 
          }}
          >
            {/* 쪼갭니다. props string 3개 */}
            <Box sx={{bgcolor:'white', width:'100%', height:'30%', display:'flex', justifyContent:'space-between', borderRadius: 1, boxShadow:1}}>
              <Typography sx={{fontWeight:"bold", lineHeight:3, pl:2}}>05-03 수 급등주최원도 매일 3% 강력희토류 유니온 + 140% 수익중</Typography>
              <Typography sx={{lineHeight:3, pr:2}}>급등주최원도 | 2023-05-04</Typography>
            </Box>
            <Box sx={{bgcolor:'white', width:'100%', height:'30%', display:'flex', justifyContent:'space-between', borderRadius: 1, boxShadow:1}}>
              <Typography sx={{fontWeight:"bold", lineHeight:3, pl:2}}>05-03 수 급등주최원도 매일 3% 강력희토류 유니온 + 140% 수익중</Typography>
              <Typography sx={{lineHeight:3, pr:2}}>급등주최원도 | 2023-05-04</Typography>
            </Box>
            <Box sx={{bgcolor:'white', width:'100%', height:'30%', display:'flex', justifyContent:'space-between', borderRadius: 1, boxShadow:1}}>
              <Typography sx={{fontWeight:"bold", lineHeight:3, pl:2}}>05-03 수 급등주최원도 매일 3% 강력희토류 유니온 + 140% 수익중</Typography>
              <Typography sx={{lineHeight:3, pr:2}}>급등주최원도 | 2023-05-04</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* 엑스원 아카데미 */}



    </Container>
  )
}