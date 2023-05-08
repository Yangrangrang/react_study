import { LocalStorage } from "./LocalStorge";

export class LoginUserService {

  login (id:string, password : string){
    const userList = LocalStorage.getListItem('userList');
    const user = userList.find( u => u.userId === id && u.userPw === password);

    return user;
  }
}