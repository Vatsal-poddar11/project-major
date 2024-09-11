const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';

export const endpoints = {
    SENDOTP_API: BASE_URL + "/api/v1/auth/sendotp",
    SIGNUP_API: BASE_URL + "/api/v1/auth/signup",
    LOGIN_API: BASE_URL + "/api/v1/auth/login",
}

export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/api/v1/profile/getUserDetails",
}

export const settingsEndpoints = {
    UPDATE_PROFILE_API: BASE_URL + "/api/v1/profile/updateProfile",
    DELETE_PROFILE_API: BASE_URL + "/api/v1/profile/deleteProfile",
}