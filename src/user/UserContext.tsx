import { createContext, useState } from "react";
import { User } from "./User";

// 로그인 여부를 저장 하는 Context생성
export const UserContext = createContext({
  isLoggedIn : false,
  toggleLogin : () => {}
 })

 // 로그인 여부를 상태로 가지고 있는 Provider 컴포넌트
type UserContextProviderProps = {
  children : React.ReactNode
};

export const UserContextProvider = ({children}: UserContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    const user = localStorage.getItem('user');
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    console.log(isLoggedIn);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
}