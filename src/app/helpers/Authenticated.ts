import jwt from 'jsonwebtoken';

export const Authentication = {        
    async setAccessToken(userToken: any) {
        localStorage.setItem("AccessToken", userToken);        
    },
    async getAccessToken() {
        let token: string = localStorage.getItem("AccessToken") as string;
        return token;
    },
    isAuthenticated() {
        let userToken: string = localStorage.getItem("AccessToken") as string;
        return userToken ? true : false;
    },
    async signout() {
        localStorage.removeItem("AccessToken");
    },
    async tokenHasExpired(accessToken: any) {
        const decodedToken = jwt.decode(accessToken) as any;
        // Divide milliseconds since Epoch and round up
        // We would rather be over than under
        // This would be better handled with Moment.js
        const now = new Date();
        const currentTimeInSeconds = Math.ceil(now.getTime() / 1000);
        // Compare the token's expiration to the current time
        // Consider the token to expire a little early to avoid expiration before use
        if (decodedToken.exp - 1 < currentTimeInSeconds) {
            return true;
        } else {
            return false;
        }
    },
    getFirmname() {
        let accessToken: string = localStorage.getItem("AccessToken") as string;
        let decodeaccessToken = jwt.decode(accessToken) as any;
        if (decodeaccessToken) {
            return decodeaccessToken.FirmName
        }
    },
    getUsername() {
        let accessToken: string = localStorage.getItem("AccessToken") as string;
        let decodeaccessToken = jwt.decode(accessToken) as any;
        if (decodeaccessToken) {
            return decodeaccessToken.Username
        }
    },
};