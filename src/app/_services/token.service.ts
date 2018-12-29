const tokenKey = 'auth_token';

export class TokenService {
    static getToken(): string {
        return window.localStorage[tokenKey];
    }

    static saveToken(token: string) {
        window.localStorage[tokenKey] = token;
    }

    static destroyToken(): void {
        window.localStorage.removeItem(tokenKey);
    }
}
