import { User } from "./User";

export class LocalStorage {

  // userList LocalStorage
  static getListItem(name : string) : User[] {
    const listJson = localStorage.getItem(name);
    if (listJson === null) {
      const newListJson : [] = [];
      LocalStorage.saveListItem(name, newListJson);
      return newListJson;
    }
    return JSON.parse(listJson);
  }
  static saveListItem(name: string ,list: Object){
    const newListJson = JSON.stringify(list);
    localStorage.setItem(name, newListJson);
  }

  // LoginUser LocalStorege
  static saveUserItem(user: User){
    const loginUserJson = localStorage.getItem('user');
    if (loginUserJson === null){
      const userJson = JSON.stringify(user)
      localStorage.setItem('user', userJson);
    }
  }

  static getUserItem() : User[] {
    const userJson = localStorage.getItem('user');
    if (userJson === null) {
      const user : [] = [];
      return user;
    }
    return JSON.parse(userJson);
  }
}