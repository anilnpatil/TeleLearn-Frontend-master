export class LoginRequest {

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password.split('');
    }

    login: string;
    password: string[];
}
