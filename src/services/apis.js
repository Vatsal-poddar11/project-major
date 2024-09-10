const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';

export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
}
