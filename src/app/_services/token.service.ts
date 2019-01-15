const tokenKey = 'auth_token';
const idKey = 'auth_id';

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

export class IdentifikatorService {
    static getAuthId(): number {
        return window.localStorage[idKey];
    }

    static saveAuthId(id: number) {
        window.localStorage[idKey] = id;
    }

    static destroyAuthId(): void {
        window.localStorage.removeItem(idKey);
    }
}
