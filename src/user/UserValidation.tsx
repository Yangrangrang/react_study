import { User } from "./User";

export class UserValidation {
  // 동일한 아이디 값이 있을 때는 회원 가입 할 수 없어
  isUserIdUnique(userList : User[], user : User) :boolean{
    let result = true;
    userList.forEach((useritem)=> {
      if (useritem.userId === user.userId){
        console.log("test");
        result = false
      };

    });
    return result;
  };

  // 공백 들어오면 막자
  isValueEmpty(value: string): boolean {
    return value.trim() === '';
  }

  validateUserInfo (user : User) :boolean {
    let result = true;
    // if (this.isValueEmpty(user.firstName) || this.isValueEmpty(user.lastName) || this.isValueEmpty(user.userId) || this.isValueEmpty(user.userPw)) {
    //   result = false;
    // } 
    return result;
  }

  // 아이디 & 비밀번호 글자수 제한

  // 유효성확인 후 결과값 반환
  validateUser(userList : User[], user : User): boolean{
    let result = true;
    if (!this.isUserIdUnique(userList,user)){
      alert("중복된 아이디 입니다.")
      result = false;
    } else if (!this.validateUserInfo(user)){
      alert("빈칸을 확인 해주세요.")
      result = false;
    }
    return result;
  }
}