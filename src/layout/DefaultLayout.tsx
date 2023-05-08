import React, { useEffect, useState } from "react";
import { CategoryList } from "./Category";
import { Header } from './Header';
import { Outlet } from "react-router-dom";
import { Login } from "@mui/icons-material";
import { LocalStorage } from "../user/LocalStorge";


export const DefaultLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // local에서 로그인 정보 불러오기
  const user = localStorage.getItem('user');
  
  // user로그인 여부 확인
  useEffect(() => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  })

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  }

  const SubCategoryName = [
    {
      categoryName: "전문가방송",
      name: ["LIVE방송", "수익률뽐내기", "감사후기"]
    },
    {
      categoryName: "카톡문자",
      name: ["카카오톡리딩", "카톡무료체험", "추천주 수익률"]
    },
    {
      categoryName: "아카데미",
      name: [""]
    },
    {
      categoryName: "투자전략",
      name: ["투자전략","오늘의 리포트", "모멘텀이슈"]
    },
    {
      categoryName: "공지사항",
      name: ["공지사항","이벤트"]
    },
    {
      categoryName: "X1신규가이드",
      name: ["X1신규가이드", "WHY? X1", "신규가입혜택", "멘토찾기"]
    },
    {
      categoryName: "로보스탁",
      name: ["로보스탁", "로보퀀트"]
    },
    {
      categoryName: "X1 NOTICE",
      name: [" "]
    },
  ]

  return (
    <div>
      < Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      < CategoryList names= {SubCategoryName}/>
      < Outlet />
    </div>
  )
}