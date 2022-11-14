import {AuthApi} from "../api/AuthApi";

class AuthController {
    api: any;

    constructor() {
        this.api = new AuthApi();
    }

    getUser() {
        this.api.getUser();
    }

    signIn(data: any) {
        this.api.signIn(data);

    }

    signUp(data: any) {
        this.api.signUp(data);

    }

    logout() {
        this.api.logout();
    }
}

export default new AuthController();