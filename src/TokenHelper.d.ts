export interface TokenPayload {
    expiration: string;
    identity: string;
    roles: string[];
    token: string;
}
export declare class TokenHelper {
    /**
     * Fetches a new token from tokenServerUrl
     * @returns {Promise<any>}
     */
    static fetchToken(refreshToken?: boolean): Promise<TokenPayload>;
    /**
     * Checks the validity of the accessToken in session.
     * If invalid, attempts to get a new one from the token server.
     * @returns {Promise<string>}
     */
    static getAccessToken(): Promise<TokenPayload>;
    /**
     * Fetches a new token from tokenServerUrl
     * @returns {Promise<void> }
     */
    static refreshAccessToken(): Promise<void>;
    static isValidTokenPayload(payload: TokenPayload): boolean;
    private static isTokenExpired;
}
