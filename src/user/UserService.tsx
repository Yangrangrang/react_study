import { LocalStorage } from "./LocalStorge";
import { User } from "./User";
import { UserValidation } from "./UserValidation";

export class UserService {

  userList : User[] = LocalStorage.getListItem('userList');

  register(user: User) : boolean{

    const userValidation = new UserValidation();
    const isUserValid = userValidation.validateUser(this.userList, user);

    if(isUserValid){
      this.userList.push(user);
      LocalStorage.saveListItem('userList', this.userList);
    } 
    return isUserValid;
  }
}