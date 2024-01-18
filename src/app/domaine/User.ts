import userDetails from "./userDetails";
import userDeatils from "./userDetails";

export default class User{
    userName:String;
    email:String;
    userPassword:String;
    active:number=1;
    userDetails: userDetails;
    role:any="User";


    constructor(userName: string , email:String, userPassword: string, userDetails: userDetails) {
      this.userName = userName;
      this.email = email;
      this.userPassword = userPassword;
      this.userDetails = userDetails;
    }
}
