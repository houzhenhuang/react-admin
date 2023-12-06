import request from "../utils/request";

export const doLogin = (loginInfo: LoginRequest) => {
    return request.post<LoginRequest, IResponse<{ token: string }>>("api/account/login", loginInfo);
};