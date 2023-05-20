import axios from "axios";

const ForgotPassword_API_BASE_URL = "http://13.53.188.15:8080/api/v1/api/v1/user/forget_password";
const ResetPassword_API_BASE_URL = "http://13.53.188.15:8080/api/v1/api/v1/user/reset_Password?token=";

class PasswordService {
    forgotPassword(email) {
        return axios.post(ForgotPassword_API_BASE_URL, email);
    }

    resetPassword(token, data) {
        console.log(token);
        return axios.post(ResetPassword_API_BASE_URL + token, data);
    }
    
}

export default new PasswordService();