export class User {
    id? : number;
    email: string;
    password: string;

    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }

    public static clone(_user : User){
        let user = new User(_user.email, _user.password);
        user.id = _user.id;
        return user;
    }
}